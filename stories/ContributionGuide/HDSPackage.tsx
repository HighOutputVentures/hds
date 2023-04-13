import { Code, Text } from "@chakra-ui/react";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ThemeProvider } from "../../packages/hds";

const HDSPackage = () => {
	return (
		<ThemeProvider>
			<Text size="header-3" mb={5}>
				HDS Contribution - Packages
			</Text>

			<Text size="paragraph-md-default" mb={5}>
				In contributing for a seperate package we have slight different approach and files
				are more minimize and sizes are more light. Install first tsdx a zero-config cli
				to help us create a bare typescript packages without setting up anything:
			</Text>

			<SyntaxHighlighter language="typescript" style={docco}>
				{`npm i tsdx -g`}
			</SyntaxHighlighter>

			<Text size="paragraph-md-default" mt={5} mb={5}>
				then after installing it you can start creating a package, go to `./packages`
				under it in your terminal run command
			</Text>

			<Text size="paragraph-md-default" mb={5}>
				(Note: select only the <strong>basic template</strong>):
			</Text>

			<SyntaxHighlighter language="typescript" style={docco}>
				{`npx tsdx create 'package_name'`}
			</SyntaxHighlighter>

			<Text size="paragraph-md-default" mt={5} mb={5}>
				After creating the package open up{" "}
				<Code colorScheme="gray" children="package.json" /> file under that project and
				replace the project name to{" "}
				<Code colorScheme="gray" children="@highoutput/hds-{package_name}" />
				make sure to use kebab naming if package name is longer.
			</Text>

			<Text size="paragraph-md-default" mb={5}>
				Folder structure under{" "}
				<Code colorScheme="gray" children="./packages/{package_name}/sr" /> folder
			</Text>

			<SyntaxHighlighter language="typescript" style={docco}>
				{`- src
  - components [folder for all components needs]
  - index.tsx [export file]
`}
			</SyntaxHighlighter>

			<Text size="header-5" mt={5} mb={5}>
				Component Guide
			</Text>

			<Text size="paragraph-md-default" mb={5}>
				<Code colorScheme="gray" children="component" /> - under components all the files
				needed for the single reusable component can be added under it, sample below:
			</Text>

			<SyntaxHighlighter language="typescript" style={docco}>
				{`
- components
    - RadioImage.tsx [reusable component]
    - RadioImage.stories.tsx [storybook component for testing/demo the component]
    - RadioImage.docs.mdx [to customize docs tab]
    - RadioImage.test.tsx [test file]
`}
			</SyntaxHighlighter>

			<Text size="paragraph-md-default" mt={5} mb={5}>
				after creating all those files you can now import your component into{" "}
				<Code colorScheme="gray" children="src/index.tsx" /> file and then export it which
				would make it available for anyone who use the library.
			</Text>

			<SyntaxHighlighter language="typescript" style={docco}>
				{`// index.tsx
import RadioImage, {
  RadioImageProps,
} from "./components/RadioImage/RadioImage";

export {
  RadioImage,
  RadioImageProps, // note: always include exporting the component props
};
`}
			</SyntaxHighlighter>

			<Text size="header-5" mt={5} mb={5}>
				Theme Guide
			</Text>

			<Text size="paragraph-md-default" mb={5}>
				For <Code colorScheme="gray" children="theme" /> guide you can still follow the
				document in <strong>HDS Core</strong> all custom styling should be under it.
			</Text>

			<Text size="header-5" mb={5}>
				How to run library/test component
			</Text>

			<Text size="paragraph-md-default" mb={5}>
				To run library storybook go to hds root directory and run command:
			</Text>

			<SyntaxHighlighter language="typescript" style={docco}>
				{`npm install
npm run storybook
`}
			</SyntaxHighlighter>

			<Text size="paragraph-md-default" mt={5} mb={5}>
				To run library storybook go to hds root directory and run command:
			</Text>

			<SyntaxHighlighter language="typescript" style={docco}>
				{`npm run test`}
			</SyntaxHighlighter>

			<Text size="paragraph-md-default" mt={5} mb={5}>
				To test build of components, run command:
			</Text>

			<SyntaxHighlighter language="typescript" style={docco}>
				{`npm run build`}
			</SyntaxHighlighter>

			<Text size="header-5" mt={5} mb={5}>
				Publishing
			</Text>

			<Text size="paragraph-md-default" mt={5} mb={5}>
				In order to publish new package created run first:
			</Text>

			<SyntaxHighlighter language="typescript" style={docco}>
				{`lerna bootstrap`}
			</SyntaxHighlighter>

			<Text size="paragraph-md-default" mt={5} mb={5}>
				if all run successfully then run:
			</Text>

			<SyntaxHighlighter language="typescript" style={docco}>
				{`lerna publish`}
			</SyntaxHighlighter>

			<Text size="paragraph-md-default" mt={5} mb={5}>
				make sure to install <Code colorScheme="gray" children="npm i lerna-cli -g" /> to
				run lerna commands.
			</Text>
		</ThemeProvider>
	);
};

export default HDSPackage;
