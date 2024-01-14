import { useMediaQuery, useTheme, Theme } from '@mui/material';

interface ScreenSize {
  isMobileScreen: boolean;
  isSmallScreen: boolean;
}

export const useScreenSize = (): ScreenSize => {
  const theme: Theme = useTheme();

  const isMobileScreen: boolean = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('sm'));

  return { isMobileScreen, isSmallScreen };
};
