import { getUserQueryOptions } from '@/api/user/get-user';
import { api } from '@/lib/api-client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@/store/auth';
import { useLocation, useRouter } from '@tanstack/react-router';
import { apiRoutes, appRoutes } from '@/config/routes';

export function logout() {
  return api.post(apiRoutes.auth.logout.path);
}

export function useLogout() {
  const queryClient = useQueryClient();
  const { clearSession } = useAuth();
  const router = useRouter();
  const location = useLocation();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(getUserQueryOptions().queryKey, undefined);
      clearSession();
      router.navigate({
        to: appRoutes.auth.login.path,
        search: {
          redirect: location.href,
        },
      });
    },
  });
}
