import { renderHook } from '@testing-library/react-hooks';
import { useAuth, AuthProvider } from '../../hooks/auth';

describe('Auth hook', () => {
  it('should be to sign in', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'tnt.raphael@gmail.com',
      password: '123456',
    });

    expect(result.current.user.email).toEqual('tnt.raphael@gmail.com');
  });
});
