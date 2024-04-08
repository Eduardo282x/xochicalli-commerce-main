import { FC, lazy } from "react";

import {
  Text,
  HStack,
  useMediaQuery,
  Heading,
  IconButton,
  Select,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import { ActiveUser, NavbarItems } from "@/interfaces";
import { logOut } from "@/utils";
import { selectProductsData, linksData } from "./navbar.data";

const Sidebar = lazy(() => import("./Sidebar"));

const Navbar: FC<ActiveUser> = ({ isUser }): JSX.Element => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const navigate = useNavigate();

  const onLogout = async () => {
    await logOut().then(() => {
      navigate("/");
      window.location.reload();
    })
      .catch((err) => console.log(err));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProductId = parseInt(e.target.value);
    const selectedProduct = selectProductsData.find((product) => product.id === selectedProductId);

    if (selectedProduct) {
      navigate(selectedProduct.path);
    }
  };

  return (
    <div className="relative">
      <div className="fixed flex flex-col justify-between left-0 top-0 h-[calc(100%-64px)] mt-[64px] bg-white p-4 z-50 sidebar-menu transition-transform">
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          {linksData.map(opt => (
            <div key={opt.id} onClick={() => navigate(opt.path)} role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-[#48bb78] focus:bg-[#48bb78] active:bg-[#48bb78] hover:text-white focus:text-white active:text-white outline-none">
              <span className="material-symbols-outlined">{opt.icon}</span>
              <p className="mx-2" >{opt.text}</p>
            </div>
          ))}
        </nav>

        <div onClick={onLogout} className="flex items-center justify-start gap-2 w-full rounded-2xl bg-red-600 text-white p-4 cursor-pointer">
          <span className="material-symbols-outlined">logout</span>
          <p>Cerrar sesión</p>
        </div>
      </div>

      <HStack className="w-full justify-between items-center bg-[#48bb78] h-[64px] "
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
      </HStack>
    </div>
  );
};

export default Navbar;
