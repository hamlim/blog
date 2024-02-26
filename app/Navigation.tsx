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
  HomeIcon,
  MessageSquareTextIcon,
  Signpost,
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

function MobileNav() {
  let pathname = usePathname();
  let greeting = useGreeting();
  return (
    <Box className='m-4 flex gap-4'>
      <Drawer key={pathname} direction='left'>
        <DrawerTrigger>
          <Signpost size={24} /> <span className='sr-only'>Open Navigation</span>
        </DrawerTrigger>
        <DrawerContent direction='left' className='h-full min-w-[15rem] w-[30%] max-w-[95%]'>
          <DrawerHeader>
            <DrawerClose>
              <XIcon size={24} /> <span className='sr-only'>Close Navigation</span>
            </DrawerClose>
          </DrawerHeader>
          <Box>
            <Link href='/' className='flex items-center p-4 px-6'>
              <HomeIcon size={24} /> <span className='pl-4'>Home</span>
            </Link>
            <hr />
            <Link href='/blog' className='flex items-center p-4 px-6'>
              <BookTextIcon size={24} /> <span className='pl-4'>Blog</span>
            </Link>
            <hr />
            <Link href='/resume' className='flex items-center p-4 px-6'>
              <FileIcon size={24} /> <span className='pl-4'>Resume</span>
            </Link>
            <hr />
            <Link href='/projects' className='flex items-center p-4 px-6'>
              <FlaskConical size={24} /> <span className='pl-4'>Projects</span>
            </Link>
            <hr />
            <Link href='/tools' className='flex items-center p-4 px-6'>
              <BookTextIcon size={24} /> <span className='pl-4'>Tools</span>
            </Link>
            <hr />
            <Link href='/social' className='flex items-center p-4 px-6'>
              <Contact2 size={24} /> <span className='pl-4'>Social</span>
            </Link>
          </Box>
          <DrawerFooter>
            <Link href='/feed' className='flex items-center p-4 px-6'>
              <MessageSquareTextIcon size={24} /> <span className='pl-4'>Feed</span>
            </Link>
            <Text>
              Matt Hamlin - {new Date().getFullYear()}
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Text className='italic' suppressHydrationWarning>
        {(() => {
          if (pathname.startsWith('/blog')) return "Matt's Musings";
          return greeting;
        })()}
      </Text>
    </Box>
  );
}

export function Navigation() {
  return (
    <>
      <MobileNav />
    </>
  );
}
