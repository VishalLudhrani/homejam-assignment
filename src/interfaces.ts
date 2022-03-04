export interface IconProps {
  size: "small" | "inherit" | "large" | "medium" | undefined,
}

export interface MobileNavMenuProps {
  anchorNav: HTMLElement | null,
  handleOpenNav: (event: React.MouseEvent<HTMLElement>) => void,
  handleCloseNav: () => void,
  pages: string[]
}

export interface DesktopNavMenuProps {
  pages: string[],
  handleCloseNav: () => void
}

export interface DashboardElementProps {
  icon: any,
  title: string,
  subtitle: string
}

export interface ShowProps {
  image: string,
  speaker: string,
  category: string,
  bgHeight: string
}

export interface ReviewProps {
  userImage: string,
  username: string,
  country: string,
  review: string,
  bgHeight: string,
  cardWidth: string
}