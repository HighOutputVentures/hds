import { Box, BoxProps, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import { atomOneLight as colorScheme } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('bash', bash);

export default function AuthProviderStory() {
  return (
    <Box
      sx={{
        '& p': {
          color: 'neutrals.800',
        },
        '& strong': {
          fontWeight: 'semibold',
        },
      }}
    >
      <Box>
        <Heading>Auth Provider with&nbsp;Hooks</Heading>
        <Text mt={2}>
          designed to be integrated with&nbsp;
          <strong>@highoutput/email-auth</strong>
        </Text>
        <Text mt={2}>To install the package, run&nbsp;command:</Text>
        <Snippet mt={4} language="bash">
          npm i @highoutput/hds-auth
        </Snippet>
      </Box>

      <Box mt={10}>
        <Heading>Usage</Heading>
        <Snippet mt={4}>{snippet1}</Snippet>
      </Box>

      <Box mt={10}>
        <Text>
          Using <strong>useAuthService.generateOtp</strong> with&nbsp;
          <strong>useAuthState.session</strong>
        </Text>

        <Snippet mt={4}>{snippet2}</Snippet>

        <Box mt={6}>
          <Text>💡 What is this&nbsp;snippet?</Text>
          <Snippet mt={4}>{snippet3}</Snippet>
          <Text mt={3}>
            One use for this is if you want to sync browser tabs. Whenever the{' '}
            <strong>session.status</strong> changes to{' '}
            <strong>authenticated</strong>, <strong>onauthenticated</strong>{' '}
            callback runs. Hence, if you call <strong>router.push</strong> it
            will be&nbsp;executed.
          </Text>
        </Box>
      </Box>

      <Box mt={10}>
        <Text>
          Using <strong>useAuthState.validateOtp</strong> with&nbsp;
          <strong>useAuthState.session</strong>
        </Text>

        <Snippet mt={4}>{snippet4}</Snippet>
      </Box>

      <Box mt={10}>
        <Text>
          Using <strong>useAuthState.token</strong>
        </Text>

        <Snippet mt={4}>{snippet5}</Snippet>
      </Box>

      <Box mt={10}>
        <Heading size="header-5">
          Usage with <strong>Next.js</strong>&nbsp;middleware
        </Heading>
        <Box
          mt={8}
          bgColor="#fff7ed"
          padding={4}
          rounded="md"
          maxWidth="600px"
          width="full"
        >
          <Flex
            bgGradient="linear(to-r, #fde68a, #fdba74)"
            width="fit-content"
            rounded="full"
            padding={3}
          >
            <Icon as={LightBulbIcon} width={8} height={8} stroke="#a16207" />
          </Flex>
          <Text mt={4} fontSize="sm">
            You want a user to be redirected to login page when they access a
            protected route and you also want them to be redirected to&nbsp;
            <strong>/dashboard</strong> when they access a public route
            like&nbsp;
            <strong>/login</strong> or <strong>/signup</strong>. Ideally, we do
            a redirect before the page is even sent to the browser hence do it
            on server&rsquo;s side. What we can do is to check if token is in
            the cookie by taking advantage of Next.js'
            middleware&nbsp;like&nbsp;so
          </Text>
        </Box>

        <Snippet mt={4}>{snippet6}</Snippet>
      </Box>
    </Box>
  );
}

function LightBulbIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    </svg>
  );
}

function Snippet({
  language = 'typescript',
  children,
  ...props
}: BoxProps & { language?: string }) {
  return (
    <Box
      as={SyntaxHighlighter}
      style={colorScheme}
      language={language}
      padding="24px!important"
      {...props}
    >
      {children}
    </Box>
  );
}

const snippet1 = `// src/pages/_app.tsx
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@highoutput/hds';
import type { AppProps } from 'next/app';
import client from '~/config/client';
import { AuthProvider } from '@highoutput/hds-auth';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider hostname={process.env.NEXT_PUBLIC_API_URL}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  );
}`;

const snippet2 = `// src/pages/login.tsx
function Login() {
  const router = useRouter();

  const { generateOtp } = useAuthService();
  const { session } = useAuthState({
    onauthenticated() {
      router.push("/dashboard");
    },
  });

  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // sends a post request to \`<hostname>/otp/generate\`
      await generateOtp(email)
      await router.push(\`/verify?emailAddress=\${email}\`)
    } catch {
      ...
    } finally {
      ...
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value);
        }}
      />

      <button type="submit" disabled={session.status !== "unauthenticated"}>
        Login
      </button>
    </form>
  );
}`;

const snippet3 = `const { session } = useAuthState({
  onauthenticated() {
    router.push('/dashboard');
  },
});`;

const snippet4 = `// src/pages/verify.tsx
function Verify() {
  const router = useRouter();

  const { validateOtp } = useAuthService();
  const { session } = useAuthState({
    onauthenticated() {
      router.push("/dashboard");
    },
  });

  const [otp, setOtp] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // sends a post request to \`<hostname >/otp/validate\`
      // automatically saves the token in cookie
      await validateOtp(otp)
      await router.push("/dashboard")
    } catch {
      ...
    } finally {
      ...
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <OtpField value={otp} onChange={setOtp} />

      <button type="submit" disabled={session.status !== "unauthenticated"}>
        Login
      </button>
    </form>
  );
}`;

const snippet5 = `// src/pages/dashboard.tsx
export default function Dashboard() {
  const router = useRouter();

  const { token } = useAuthState({
    // send to login page when \`session.status\` changes to \`unauthenticated\`
    onunauthenticated() {
      router.push('/login');
    },
  });

  // you can pass this token to your apollo config or use it somewhere else
  console.log(token);

  return (
    <div>
      <Notifs />
      <Chart />
      <Recent />
    </div>
  );
}`;

const snippet6 = `// src/middleware.ts
import { constants } from '@highoutput/hds';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // this is how you would access the token from cookie when running in ssr
  const authorized = req.cookies.has(constants.accessTokenId);

  if (authorized && isPublic(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl.origin));
  }

  if (!authorized && isProtected(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/login', req.nextUrl.origin));
  }

  return NextResponse.next();
}

function isPublic(pathname: string) {
  return /^\\/(login|verify)/gi.test(pathname);
}

function isProtected(pathname: string) {
  return /^\\/(dashboard|settings|me)/gi.test(pathname);
}`;
