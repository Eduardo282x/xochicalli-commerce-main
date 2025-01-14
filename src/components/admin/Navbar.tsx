import { FC, lazy, useEffect, useState } from "react";

// import {
//   Text,
//   HStack,
//   useMediaQuery,
//   Heading,
//   IconButton,
//   Select,
// } from "@chakra-ui/react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
// import { FiLogOut } from "react-icons/fi";
import { Box } from "@chakra-ui/react";
import { ActiveUser, NavbarItems } from "@/interfaces";
import { logOut } from "@/utils";
import { linksData } from "./navbar.data";

//  const Sidebar = lazy(() => import("./Sidebar"));

const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));
const FloatButton = lazy(() => import("@/components/Floatbutton"));
const Footer = lazy(() => import("@/components/Footer"));

const Navbar: FC<ActiveUser> = ({ isUser }): JSX.Element => {
  // const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const { pathname } = useLocation();
  const [listMenu, setListMenu] = useState<NavbarItems[]>(linksData);

  const normalClass = 'hover:bg-[#48bb78] hover:text-white';
  const activeClass = 'bg-[#48bb78] text-white';

  const navigate = useNavigate();

  const handleActive = (optionMenu: NavbarItems) => {
    linksData.map((opt: NavbarItems) => {
      opt.active = false;
      return opt;
    });
    const findActive = linksData.find(opt => opt.id === optionMenu.id);
    if(findActive){
      findActive.active = true;
      setListMenu(linksData);
    }
  }

  const onLogout = async () => {
    await logOut().then(() => {
      navigate("/");
      window.location.reload();
    })
      .catch((err) => console.log(err));
  };

  // const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedProductId = parseInt(e.target.value);
  //   const selectedProduct = selectProductsData.find((product) => product.id === selectedProductId);

  //   if (selectedProduct) {
  //     navigate(selectedProduct.path);
  //   }
  // };

  useEffect(() => {
    linksData.map((opt: NavbarItems) => {
      opt.active = false;
      return opt;
    });
    const findActive = linksData.find(opt => opt.path === pathname);
    if(findActive){
      findActive.active = true;
      setListMenu(linksData);
    }
  },[pathname])

  return (
    <div className="bg-gray-300 h-screen overflow-hidden">
      <div className="fixed flex flex-col md:w-auto w-0 overflow-hidden justify-between left-0 top-0 h-full bg-white md:p-4 z-50 transition-transform">
        <nav className="flex flex-col gap-1 min-w-[15rem] p-2 font-sans text-base font-normal text-gray-700">
          <div className={`flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all cursor-pointer bg-green-700 font-semibold text-base text-white outline-none`}>
            <p className="mx-2" >Panel de administrador</p>
          </div>

          {listMenu.map((opt: NavbarItems) => (
            <div key={opt.id} onClick={() => {navigate(opt.path); handleActive(opt)}} className={`flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all cursor-pointer ${opt.active ? activeClass : normalClass} outline-none`}>
              <span className="material-symbols-outlined">{opt.icon}</span>
              <p className="mx-2" >{opt.text}</p>
            </div>
          ))}
        </nav>

        <div onClick={onLogout} className="flex items-center justify-start gap-2 w-full rounded-2xl bg-red-600 hover:bg-red-700 hover:shadow-lg transition-all text-white p-4 cursor-pointer">
          <span className="material-symbols-outlined">logout</span>
          <p>Cerrar sesión</p>
        </div>
      </div>

      {/* <HStack className="w-full justify-between items-center bg-[#48bb78] h-[64px] "
        px={[4, 8, 12]}
      >
        <Heading color='white' fontSize={["xl", "2xl"]} className="cursor-pointer">
          Panel de administrador
        </Heading>

        {isLargerThan800 ? (
          <>
            <HStack justifyContent='space-between'>
              <HStack>
                {linksData.map(({ path, id, text }: NavbarItems) => (
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? {
                          backgroundColor: "#fff",
                          color: "#4A5568",
                          padding: "4px",
                          borderRadius: "4px",
                          transition: "all 300ms ease",
                        }
                        : { color: "#fff", transition: "all 300ms ease" }
                    }
                    to={path}
                    key={id}
                  >
                    <Text fontWeight='semibold' mx={[1, 1, 1, 4, 8]}>
                      {text}
                    </Text>
                  </NavLink>
                ))}

                <Select
                  iconColor='#fff'
                  onChange={handleSelectChange}
                  variant='unstyled'
                  style={{
                    color: "#fff",
                    transition: "all 300ms ease",
                    fontWeight: "600",
                  }}
                >
                  {selectProductsData.map(({ path, id, text }: NavbarItems) => (
                    <option style={{ color: "#000" }} value={id} key={id}>
                      {text}
                    </option>
                  ))}
                </Select>


              </HStack>
              {isUser && (
                <IconButton
                  aria-label='logout'
                  colorScheme='red'
                  icon={<FiLogOut />}
                  onClick={onLogout}
                />
              )}
            </HStack>
          </>
        ) : (
          <Sidebar isUser={isUser} />
        )}
      </HStack> */}

      <div className="h-full overflow-auto w-full ml-0 md:w-[calc(100%-8rem)] md:ml-[12.5rem] flex flex-col items-center justify-start">
        <div className="h-auto w-full flex items-center justify-center">
          <Outlet/>
        </div>

        {pathname !== "/checkout" && <Box className="z-50">
                  <WhatsAppButton />
                  <FloatButton />
              </Box>
              }
        {pathname !== "/checkout" && <Footer />}
      </div>
    </div>
  );
};

export default Navbar;
