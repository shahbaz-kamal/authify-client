import Agencies from "@/Pages/Admin/Agencies";
import Dashboard from "@/Pages/Admin/Dashboard";
import LiveStreams from "@/Pages/Admin/LiveStreams";
import Moderation from "@/Pages/Admin/Moderation";
import TransactionHistory from "@/Pages/Admin/TransactionHistory";

import type { ISidebarItems } from "@/types";

import Analytics from "@/Pages/Admin/Analytics";
import GiftsAndAssets from "@/Pages/Admin/GiftsAndAssets";
import Settings from "@/Pages/Admin/Settings";

import AgenciesIcon from "@/assets/icons/AgenciesIcon";
import CoinManagementIcon from "@/assets/icons/CoinManagementIcon";
import DashboardIcon from "@/assets/icons/DashboardIcon";
import KycCentreIcon from "@/assets/icons/KycCentreIcon";
import LiveStreamsIcon from "@/assets/icons/LiveStreamsIcon";
import ModerationIcon from "@/assets/icons/ModerationIcon";
import PkMasterIcon from "@/assets/icons/PkMasterIcon";
import TransactionHistoryIcon from "@/assets/icons/TransactionHistoryIcon";
import AnalyticsIcon from "@/assets/icons/AnalyticsIcon";
import GiftAndAssetIcon from "@/assets/icons/GiftAndAssetIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import UsersIcon from "@/assets/icons/UsersIcon";
import Users from "@/Pages/Admin/Users";

export const adminSidebarItems: ISidebarItems[] = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    component: Dashboard,
    icon: <DashboardIcon></DashboardIcon>,
  },
  {
    title: "Users",
    url: "/admin/users",
    component: Users,
    icon: <UsersIcon></UsersIcon>,
  },
  {
    title: "Agencies",
    url: "/admin/agencies",
    component: Agencies,
    icon: <AgenciesIcon></AgenciesIcon>,
  },
  {
    title: "Coin Managements",
    url: "/admin/coin-managements",
    component: Agencies,
    icon: <CoinManagementIcon></CoinManagementIcon>,
  },
  {
    title: "Live Streams",
    url: "/admin/live-streams",
    component: LiveStreams,
    icon: <LiveStreamsIcon></LiveStreamsIcon>,
  },
  {
    title: "Transaction History",
    url: "/admin/transaction-history",
    component: TransactionHistory,
    icon: <TransactionHistoryIcon></TransactionHistoryIcon>,
  },
  {
    title: "PK Masters",
    url: "/admin/pk-masters",
    component: TransactionHistory,
    icon: <PkMasterIcon></PkMasterIcon>,
  },
  {
    title: "Kyc Centre",
    url: "/admin/kyc-centre",
    component: TransactionHistory,
    icon: <KycCentreIcon></KycCentreIcon>,
  },
  {
    title: "Moderation",
    url: "/admin/moderation",
    component: Moderation,
    icon: <ModerationIcon></ModerationIcon>,
  },
  {
    title: "Analytics",
    url: "/admin/analytics",
    component: Analytics,
    icon: <AnalyticsIcon></AnalyticsIcon>,
  },
  {
    title: "Gifts & Assets",
    url: "/admin/gifts-and-assets",
    component: GiftsAndAssets,
    icon: <GiftAndAssetIcon></GiftAndAssetIcon>,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    component: Settings,
    icon: <SettingsIcon></SettingsIcon>,
  },
];
