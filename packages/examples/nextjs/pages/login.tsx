import { Box, Flex, Heading, Text } from '@highoutput/hds';
import { CredentialLoginForm } from '@highoutput/hds-auth';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();

  return (
    <Flex as="main" flexDir="column" justifyContent="center" minH="100vh">
      <Box>
        <CredentialLoginForm
          marginX="auto"
          variant="name-password"
          renderHeader={
            <Box pb={6}>
              <Heading size="header-4">Welcome Back</Heading>
              <Text size="paragraph-sm-default" color="neutrals.700">
                Please login to continue.
              </Text>
            </Box>
          }
          onSubmit={async (credentials) => {
            console.log({ credentials });

            await router.push('/');
          }}
        />
      </Box>
    </Flex>
  );
}
