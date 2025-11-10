import SidebarWrapper from "../components/sidebartoggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SidebarWrapper />
      <main className="flex-1">{children}</main>
    </div>
  );
}