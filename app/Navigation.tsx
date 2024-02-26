'use client';
import { Box } from '@recipes/box';
import { Container } from '@recipes/container';
import { Link } from '@recipes/link';
import { Text } from '@recipes/text';
import { BookTextIcon, Contact2, FileIcon, FlaskConical, HomeIcon, Signpost, XIcon } from 'lucide-react';

import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from '@recipes/drawer';
import { usePathname } from 'next/navigation';

function DesktopNav() {
  return (
    <nav className='hidden md:flex'>
      <Container>
        <Box className='flex items-center mb-2 gap-3'>
          <Link href='/'>
            <span>
              <HomeIcon size={24} /> Home
            </span>
          </Link>
          <Link href='/blog'>
            <span>
              <BookTextIcon size={24} />Blog
            </span>
          </Link>
          <Link href='/resume'>
            <span>
              <BookTextIcon size={24} />Resume
            </span>
          </Link>
          <Link href='/projects'>
            <span>
              <BookTextIcon size={24} />Projects
            </span>
          </Link>
          <Link href='/blog'>
            <span>
              <BookTextIcon size={24} />Blog
            </span>
          </Link>
          <Link href='/posts'>📝 Blog</Link> <Link href='/projects'>🧪 Projects</Link>{' '}
          <Link href='/bookshelf'>📚 Bookshelf</Link> <Link href='/resume'>💼 Resume</Link>
        </Box>
      </Container>
    </nav>
  );
}

function MobileNav() {
  let pathname = usePathname();
  return (
    <Box className='m-4'>
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
            <Text>
              Matt Hamlin - {new Date().getFullYear()}
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export function Navigation() {
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
}
