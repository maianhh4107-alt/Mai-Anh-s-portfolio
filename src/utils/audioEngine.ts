/**
 * Retro UI Sound Effects (Click & Heart Beeps)
 * Client-side synthesized feedback for button interactions.
 */

class RetroAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.2;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public isSoundActive(): boolean {
    return !this.isMuted;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  public playClickSound() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1320, now + 0.06);

      gainNode.gain.setValueAtTime(0.1 * this.volume, now);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.07);
    } catch {
      // Audio context may be restricted before user gesture
    }
  }

  public playHeartSound() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(659.25, now);
      osc1.frequency.setValueAtTime(880.0, now + 0.06);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1046.5, now + 0.06);

      gainNode.gain.setValueAtTime(0.12 * this.volume, now);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now + 0.06);
      osc1.stop(now + 0.26);
      osc2.stop(now + 0.26);
    } catch {
      // Audio context may be restricted before user gesture
    }
  }
}

export const audioEngine = new RetroAudioEngine();
