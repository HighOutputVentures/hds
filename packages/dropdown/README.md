### Getting started

We aim to build a library of custom ReactJS components that implements our unique UI design conventions. The ReactJS components will be based primarily on Chakra UI components. React Storybook will be used for documentation and testing.

## Commands

To install package, use:

```bash
npm i @highoutput/hds-dropdown
```

### Usage

```jsx
import { MenuDropdown, InputDropdown } from '@highoutput/hds-tooltip';

export const InputDropdownSamplePage = () => {
  const options = [
    {
      value: 'Phoenix',
      label: 'Phoenix',
      username: '@phoenix',
      avatar:
        'https://assets.teenvogue.com/photos/626abe370979f2c5ace0ab29/16:9/w_2560%2Cc_limit/GettyImages-1352932505.jpg',
    },
    {
      value: 'Olivia',
      label: 'Olivia',
      username: '@olivia',
      avatar:
        'https://static01.nyt.com/images/2021/05/21/arts/21review-rodrigo01/merlin_188054001_2a34e77d-e653-488a-a4d9-1a0f1ddf73e4-superJumbo.jpg',
    },
  ];
  const onChange = (value) => {
    // do something
  };
  return (
    <InputDropdown
      onChangeValue={(value) => onChange(value)}
      options={options}
      label="Users"
      placeholder="Add users"
      inputLeftIcon={SearchIcon}
    />
  );
};

export const MenuDropdownSamplePage = () => {
  const menuItems = (
    <Menu>
      <MenuGroup>
        <MenuItem icon={<UserIcon />} command="⌘K->P">
          View Profile
        </MenuItem>
        <MenuItem icon={<SettingIcon />} command="⌘S">
          Settings
        </MenuItem>
        <MenuItem icon={<ZapIcon />} command="?">
          Keyboard shortcuts
        </MenuItem>
      </MenuGroup>
      <Divider />
      <MenuGroup>
        <MenuItem icon={<HomeIcon />} command="⌘K->C">
          Company profile
        </MenuItem>
        <MenuItem icon={<UsersIcon />} command="⌘K->T">
          Team
        </MenuItem>
        <MenuItem icon={<UserPlusIcon />} command="⌘K->T">
          Invite colleagues
        </MenuItem>
      </MenuGroup>
      <Divider />
      <MenuGroup>
        <MenuItem icon={<LayersTwoIcon />} command="⌘K->C">
          Changelog
        </MenuItem>
        <MenuItem icon={<MessageSmileIcon />} command="⌘K->S">
          Slack Community
        </MenuItem>
        <MenuItem icon={<HelpIcon />} command="⌘/">
          Support
        </MenuItem>
        <MenuItem icon={<BoxIcon />} command="⌘A">
          API
        </MenuItem>
      </MenuGroup>
      <Divider />
      <MenuGroup>
        <MenuItem
          icon={<ExitIcon />}
          command="⌥⇧Q"
          fontSize={'14px'}
          color="neutrals.900"
        >
          Log out
        </MenuItem>
      </MenuGroup>
    </Menu>
  );
  return (
    <MenuDropdown
      menuType={'profile'}
      profileUrl={avatarUrl}
      menuHeader={{
        profileUrl: avatar,
        emailAddress: 'olivia@untitledui.com',
        userName: 'Olivia Rhye',
      }}
      menuItems={menuItems}
    />
  );
};
```
