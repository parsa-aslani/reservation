// import
import { SidebarDrawer, SidebarContent } from "..";

// set jsx
const Sidbar = () => {
  return (
    <>
      <SidebarContent
        showitems="none"
        hiddenitems="flex"
      />
      <SidebarDrawer />
    </>
  );
};
export default Sidbar;
