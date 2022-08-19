import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.doughnutswap.shop",
      },
      {
        label: "Liquidity",
        href: "https://exchange.doughnutswap.shop/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://info.doughnutswap.shop",
      },
      {
        label: "Tokens",
        href: "https://info.doughnutswap.shop/tokens",
      },
      {
        label: "Pairs",
        href: "https://info.doughnutswap.shop/pairs",
      },
      {
        label: "Accounts",
        href: "https://info.doughnutswap.shop/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.doughnutswap.shop",
      },
      {
        label: "Github",
        href: "https://github.com/DoughnutSwap",
      },
      {
        label: "Docs",
        href: "https://docs.doughnutswap.shop",
      },
      {
        label: "Blog",
        href: "https://doughnutswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/doughnut",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/DoughnutSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/DoughnutSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/DoughnutSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/doughnut._ita",
      },
      {
        label: "русский",
        href: "https://t.me/doughnut._ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/doughnut.turkiye",
      },
      {
        label: "Português",
        href: "https://t.me/DoughnutSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/DoughnutSwapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/doughnut.jp",
      },
      {
        label: "Français",
        href: "https://t.me/doughnut.fr",
      },
      {
        label: "Announcements",
        href: "https://t.me/DoughnutSwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/DoughnutSwapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/doughnut.",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
