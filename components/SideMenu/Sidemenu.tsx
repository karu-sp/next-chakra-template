import { Box, BoxProps, Drawer, DrawerContent, Flex, FlexProps, Icon, IconButton, useDisclosure,Text, VStack, Link, JsxElement } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';
import { IconType } from 'react-icons';
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
  } from 'react-icons/fi';
import { DataTable } from '../Table';

interface LinkItemProps {
    name: string
    icon: IconType
  }
  const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome },
    { name: 'Trending', icon: FiTrendingUp },
    { name: 'Explore', icon: FiCompass },
    { name: 'Favourites', icon: FiStar },
    { name: 'Settings', icon: FiSettings },
  ]
interface SidemenuProps{
  mainContent: ReactElement;
}
export function Sidemenu({mainContent}:SidemenuProps){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    return(
        <Flex>
        {/* サイドメニュー */}
        <Box
          as="nav"
          bg="gray.800"
          color="white"
          w={{ base: isOpen ? "250px" : "0", md: "250px" }}
          h="100vh"
          overflow="hidden"
          position="fixed"
          transition="width 0.3s"
        >
          <VStack align="start" p={4} gap={4}>
            {/* メニューを閉じるボタン */}
            <IconButton
              alignSelf="end"
              color="white"
              onClick={toggleMenu}
              display={{ base: "block", md: "none" }}
            />
  
            {/* メニュー項目 */}
            <Link href="NewPage" _hover={{ textDecoration: "none", bg: "gray.700" }} p={2} w="full" borderRadius="md">
              Dashboard
            </Link>
            <Link href="#" _hover={{ textDecoration: "none", bg: "gray.700" }} p={2} w="full" borderRadius="md">
              Settings
            </Link>
            <Link href="#" _hover={{ textDecoration: "none", bg: "gray.700" }} p={2} w="full" borderRadius="md">
              Profile
            </Link>
            <Link href="#" _hover={{ textDecoration: "none", bg: "gray.700" }} p={2} w="full" borderRadius="md">
              Logout
            </Link>
          </VStack>
        </Box>
  
        {/* コンテンツエリア */}
        {mainContent}
      </Flex>
    );
}

