import Color from './Color';
import RgbColor from './RgbColor';

export class CmyColor extends Color {
  public static bounds = [100, 100, 100];

  public static fromRgb(rgb: RgbColor): CmyColor {
    return new CmyColor(...rgb.map((num) => (1 - num / 255) * 100));
  }

  public toRgb(): RgbColor {
    return new RgbColor(...this.map((num) => (1 - num / 100) * 255));
  }

  public toString() {
    const values = this.map((num) => `${num.toFixed(0)}%`);
    return `cmy(${values.join(', ')})`;
  }
}

export default CmyColor;
