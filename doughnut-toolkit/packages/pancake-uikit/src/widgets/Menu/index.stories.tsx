import React, { useEffect, useState } from "react";
import noop from "lodash/noop";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Flex from "../../components/Box/Flex";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { MenuEntry } from "./components/MenuEntry";
import Menu from "./Menu";
import { Language } from "./types";
import { links } from "./config";

export default {
  title: "Widgets/Menu",
  component: Menu,
  argTypes: {},
};

const langs: Language[] = [...Array(20)].map((_, i) => ({ code: `en${i}`, language: `English${i}` }));

// This hook is used to simulate a props change, and force a re rendering
const useProps = () => {
  const [props, setProps] = useState({
    account: "0xa4436c88ab31812D1F4d066Ec83aC6530Ef8B4D9",
    login: noop,
    logout: noop,
    isDark: false,
    toggleTheme: noop,
    langs,
    setLang: noop,
    currentLang: "EN",
    doughPriceUsd: 0.023158668932877668,
    links,
    profile: null,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProps({
        account: "0xa4436c88ab31812D1F4d066Ec83aC6530Ef8B4D9",
        login: noop,
        logout: noop,
        isDark: false,
        toggleTheme: noop,
        langs,
        setLang: noop,
        currentLang: "EN",
        doughPriceUsd: 0.023158668932877668,
        links,
        profile: null,
      });
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return props;
};

export const Connected: React.FC = () => {
  const props = useProps();
  return (
    <BrowserRouter>
      <Menu {...props}>
        <div>
          <Heading as="h1" mb="8px">
            Page body
          </Heading>
          <Text as="p">
            blah a
          </Text>
        </div>
      </Menu>
    </BrowserRouter>
  );
};

export const NotConnected: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu
        account={null}
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="EN"
        links={links}
      >
        <div>
          <h1>Page body</h1>
          blah b
        </div>
      </Menu>
    </BrowserRouter>
  );
};

export const WithoutConnectButton: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu isDark={false} toggleTheme={noop} langs={langs} setLang={noop} currentLang="EN" links={links}>
        <div>
          <h1>No connect button on top</h1>
          This variant is needed for info site
        </div>
      </Menu>
    </BrowserRouter>
  );
};

export const WithNoProfile: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu
        account="0xa4436c88ab31812D1F4d066Ec83aC6530Ef8B4D9"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="EN"
        doughPriceUsd={0.23158668932877668}
        links={links}
        profile={{
          profileLink: "/profile",
          noProfileLink: "/no-profile",
        }}
      >
        <div>
          <Heading as="h1" mb="8px">
            Page body
          </Heading>
          <Text as="p">
            blah blizzah
          </Text>
        </div>
      </Menu>
    </BrowserRouter>
  );
};

export const WithProfile: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu
        account="0xa4436c88ab31812D1F4d066Ec83aC6530Ef8B4D9"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="EN"
        doughPriceUsd={0.23158668932877668}
        links={links}
        profile={{
          username: "doughnut",
          image: "https://doughnutswap.shop/images/nfts/blueberries-preview.png",
          profileLink: "/profile",
          noProfileLink: "/no-profile",
        }}
      >
        <div>
          <Heading as="h1" mb="8px">
            Page body
          </Heading>
          <Text as="p">
           blah blah blah
          </Text>
        </div>
      </Menu>
    </BrowserRouter>
  );
};

export const MenuEntryComponent: React.FC = () => {
  return (
    <Flex justifyContent="space-between" p="16px" style={{ backgroundColor: "wheat" }}>
      <MenuEntry>Default</MenuEntry>
      <MenuEntry secondary>Secondary</MenuEntry>
      <MenuEntry isActive>isActive</MenuEntry>
    </Flex>
  );
};

export const WithSubmenuSelected: React.FC = () => {
  return (
    <MemoryRouter initialEntries={["/teams"]}>
      <Menu
        account="0xa4436c88ab31812D1F4d066Ec83aC6530Ef8B4D9"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="EN"
        doughPriceUsd={0.23158668932877668}
        links={links}
        profile={{
          username: "doughnut",
          image: "https://doughnutswap.shop/images/nfts/blueberries-preview.png",
          profileLink: "/profile",
          noProfileLink: "/no-profile",
        }}
      >
        <div>
          <Heading as="h1" mb="8px">
            Submenu leaderboard selected
          </Heading>
        </div>
      </Menu>
    </MemoryRouter>
  );
};
