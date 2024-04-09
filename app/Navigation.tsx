'use client';
import { Box } from '@recipes/box';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger } from '@recipes/drawer';
import { Link } from '@recipes/link';
import { Text } from '@recipes/text';
import {
  BookTextIcon,
  Contact2,
  FileIcon,
  FlaskConical,
  Globe2,
  HomeIcon,
  LampDesk,
  LibraryBig,
  MessageSquareTextIcon,
  XIcon,
  MenuIcon,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function getRandomGreeting() {
  let greetings = [
    'Hello!',
    'Hi!',
    'Hey!',
    'Howdy!',
    "What's up!",
    'Yo!',
    'Greetings!',
    'Salutations!',
    'Good day!',
    'Good evening!',
    'Good morning!',
    'Good afternoon!',
  ];
  return `${greetings[Math.floor(Math.random() * greetings.length)]} 👋`;
}

function useGreeting() {
  let [greeting, setGreeting] = useState(getRandomGreeting());
  useEffect(() => {
    let interval = setInterval(() => {
      setGreeting(getRandomGreeting());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return greeting;
}

export function NavigationHeader() {
  let pathname = usePathname();
  let greeting = useGreeting();
  return (
    <Box className='m-4 flex justify-between'>
      <Box className='flex gap-4'>
        <Box className='sm:hidden'>
          <Drawer key={pathname} direction='left'>
            <DrawerTrigger>
              <MenuIcon size={24} className='text-primary' /> <span className='sr-only'>Open Navigation</span>
            </DrawerTrigger>
            <DrawerContent direction='left' className='h-full min-w-[15rem] w-[30%] max-w-[95%]'>
              <DrawerHeader>
                <DrawerClose>
                  <XIcon size={24} /> <span className='sr-only'>Close Navigation</span>
                </DrawerClose>
              </DrawerHeader>
              <nav>
                <NavList />
              </nav>
            </DrawerContent>
          </Drawer>
        </Box>
        <Text className='italic' suppressHydrationWarning>
          {(() => {
            if (pathname.startsWith('/blog')) return "Matt's Musings";
            return greeting;
          })()}
        </Text>
      </Box>
    </Box>
  );
}

function ActiveLink({ href, ...props }) {
  let pathname = usePathname();
  if (pathname === href) {
    return <Text {...props} />;
  }
  return <Link href={href} {...props} />;
}

function NavList() {
  return (
    <>
      <ActiveLink href='/' className='flex items-center p-4 gap-4'>
        <HomeIcon size={24} /> Home
      </ActiveLink>
      <ActiveLink href='/blog' className='flex items-center p-4 gap-4'>
        <BookTextIcon size={24} /> Blog
      </ActiveLink>
      <ActiveLink href='/resume' className='flex items-center p-4 gap-4'>
        <FileIcon size={24} /> Resume
      </ActiveLink>
      <ActiveLink href='/projects' className='flex items-center p-4 gap-4'>
        <FlaskConical size={24} /> Projects
      </ActiveLink>
      <ActiveLink href='/bookshelf' className='flex items-center p-4 gap-4'>
        <LibraryBig size={24} /> Bookshelf
      </ActiveLink>
      <ActiveLink href='/tools' className='flex items-center p-4 gap-4'>
        <LampDesk size={24} /> Tools
      </ActiveLink>
      <ActiveLink href='/social' className='flex items-center p-4 gap-4'>
        <Contact2 size={24} /> Social
      </ActiveLink>
      <ActiveLink href='/feed' className='flex items-center p-4 gap-4'>
        <MessageSquareTextIcon size={24} /> Feed
      </ActiveLink>
    </>
  );
}

export function NavigationList() {
  return (
    <nav>
      <Box className='hidden sm:flex flex-col shrink min-h-screen w-[--sidebar-width]'>
        <NavList />
      </Box>
    </nav>
  );
}
