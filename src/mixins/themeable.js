import t from 'vue-types';

const colors = {
  PRIMARY: 'primary',
  PRIMARY_LIGHT: 'primary-light',
  ACCENT: 'accent',
  WARN: 'warn',
};

const defaultColors = [
  null,
  colors.PRIMARY,
  colors.PRIMARY_LIGHT,
  colors.ACCENT,
  colors.WARN,
];

const defaultPrimaryColor = t.oneOf(defaultColors).def(colors.PRIMARY);
const defaultAccentColor = t.oneOf(defaultColors).def(colors.ACCENT);

export {
  colors,
  defaultColors,
  defaultPrimaryColor,
  defaultAccentColor,
};

const white = '#FFF';

export default {
  props: {
    dark: t.bool.def(false),
    color: t.oneOf(defaultColors).def(null),
    darkColor: t.oneOf(defaultColors).def(null),
  },
  computed: {
    isPrimary() {
      return this.color === colors.PRIMARY;
    },
    isAccent() {
      return this.color === colors.ACCENT;
    },
    isWarn() {
      return this.color === colors.WARN;
    },
    getElementStyle() {
      const { textColor: color, background } = this;
      const styles = {
        color, background,
      };
      if (this.isWarn) {
        styles.background = this.theme.warn;
      }
      return styles;
    },
    getDarkElementStyle() {
      if (this.dark) {
        return this.getElementStyle;
      }
      return {};
    },
    theme() {
      return this.$toolblox.theme;
    },
    darkTheme() {
      return this.$toolblox.darkTheme;
    },
    background() {
      return this.dark ? this.darkBackground : (this.theme[this.color] || white);
    },
    isWhiteBackground() {
      return this.background === white;
    },
    darkBackground() {
      let color;
      if (this.darkColor || this.color) {
        color = this.darkColor || this.color;
      } else {
        color = colors.primary;
      }
      return this.darkTheme[color];
    },
    textColor() {
      return this.isWhiteBackground ? '#000' : white;
    },
    darkBorder() {
      return {
        border: `1px solid ${this.darkTheme.warn}`,
      };
    },
  },
};
