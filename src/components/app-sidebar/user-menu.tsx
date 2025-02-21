import { useLogout } from '@/api/auth/logout';
import { useUser } from '@/api/user/get-user';
import { LogOut, Sparkles } from '@/components/icons';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSidebar } from '@/components/ui/sidebar';
import { appNavigations } from '@/config/navigations';
import { getNameInitials } from '@/utils/name';
import { Link } from '@tanstack/react-router';

export function UserMenu() {
  const { isMobile } = useSidebar();
  const { data: user } = useUser();
  const { mutate: logout } = useLogout();

  if (!user) return null;

  const onLogout = () => {
    logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='h-8 w-8 cursor-pointer rounded-lg'>
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback className='rounded-lg'>
            {getNameInitials(user.name)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
        side={isMobile ? 'bottom' : 'right'}
        align='end'
        sideOffset={4}
      >
        <DropdownMenuLabel className='p-0 font-normal'>
          <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
            <Avatar className='h-8 w-8 rounded-lg'>
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className='rounded-lg'>
                {getNameInitials(user.name)}
              </AvatarFallback>
            </Avatar>
            <div className='grid flex-1 text-left text-sm leading-tight'>
              <span className='truncate font-semibold'>{user.name}</span>
              <span className='truncate text-xs'>{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Sparkles />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {appNavigations.userDropdown.map((item) => (
            <DropdownMenuItem key={item.name} asChild>
              <Link to={item.path}>
                <item.icon />
                {item.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={onLogout}>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
