import NavigationBottom from "@/components/NavigationBottom";
import NavigationTop from "@/components/NavigationTop";

export default function FrontEndLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigationTop />
      {children}
      <NavigationBottom />
    </>
  );
}
