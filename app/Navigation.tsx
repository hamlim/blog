'use client';
import { Box } from '@recipes/box';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from '@recipes/drawer';
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
  MessageSquareTextIcon,
  XIcon,
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

export function Navigation() {
  let pathname = usePathname();
  let greeting = useGreeting();
  return (
    <Box is='nav' className='m-4 flex justify-between'>
      <Box className='flex gap-4'>
        <Drawer key={pathname} direction='left'>
          <DrawerTrigger>
            <Globe2 size={24} /> <span className='sr-only'>Open Navigation</span>
          </DrawerTrigger>
          <DrawerContent direction='left' className='h-full min-w-[15rem] w-[30%] max-w-[95%]'>
            <DrawerHeader>
              <DrawerClose>
                <XIcon size={24} /> <span className='sr-only'>Close Navigation</span>
              </DrawerClose>
            </DrawerHeader>
            <Box>
              <Link href='/' className='flex items-center p-4 px-6 gap-4'>
                <HomeIcon size={24} /> Home
              </Link>
              <hr />
              <Link href='/blog' className='flex items-center p-4 px-6 gap-4'>
                <BookTextIcon size={24} /> Blog
              </Link>
              <hr />
              <Link href='/resume' className='flex items-center p-4 px-6 gap-4'>
                <FileIcon size={24} /> Resume
              </Link>
              <hr />
              <Link href='/projects' className='flex items-center p-4 px-6 gap-4'>
                <FlaskConical size={24} /> Projects
              </Link>
              <hr />
              <Link href='/tools' className='flex items-center p-4 px-6 gap-4'>
                <LampDesk size={24} /> Tools
              </Link>
              <hr />
              <Link href='/social' className='flex items-center p-4 px-6 gap-4'>
                <Contact2 size={24} /> Social
              </Link>
              <hr />
              <Link href='/feed' className='flex items-center p-4 px-6 gap-4'>
                <MessageSquareTextIcon size={24} /> Feed
              </Link>
            </Box>
            <DrawerFooter>
              <Text>
                Matt Hamlin - {new Date().getFullYear()}
              </Text>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Link href='/' className='hidden md:flex items-center gap-2'>
          <HomeIcon size={24} /> Home
        </Link>
        <Text className='italic' suppressHydrationWarning>
          {(() => {
            if (pathname.startsWith('/blog')) return "Matt's Musings";
            return greeting;
          })()}
        </Text>
      </Box>
      <Box className='flex gap-4'>
        <Link href='/blog' className='flex gap-2'>
          <BookTextIcon size={24} /> Blog
        </Link>
        <Link href='/resume' className='flex gap-2'>
          <FileIcon size={24} />Resume
        </Link>
      </Box>
    </Box>
  );
}
