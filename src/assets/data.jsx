import { Badge, Box, Button, Text } from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import BasicsOfCryptoImageUrl from "./images-and-logos/basics-of-crypto-image.png";
import IntroductionToAirdropsImageUrl from "./images-and-logos/introduction-to-airdrops.png";

export const NAV_ITEMS = [
  {
    id: 1,
    label: "Compass",
    children: [
      {
        label: (
          <Box color={"#fff"}>
            All Ecosystems{" "}
            <Badge px={2} py={0.5} ml={2} borderRadius={"5px"}>
              NEW
            </Badge>
          </Box>
        ),
        href: "#",
      },
    ],
  },
  {
    id: 2,
    label: "Explore",
    href: "#",
  },
  {
    id: 3,
    label: "Academy",
    href: "#",
  },
  {
    id: 4,
    label: "NFTs",
    href: "#",
  },
  {
    id: 5,
    label: "For projects",
    children: [
      {
        label: (
          <Text fontSize={"20px"} color={"#fff"}>
            Launch your quest today!
          </Text>
        ),
        subLabel: (
          <Box>
            <Text fontSize={"14px"} mt={2}>
              ⚠️❗ Please note this is for projects only, not individual users
              ❗⚠️
            </Text>
            <Button
              leftIcon={<FaArrowRightLong />}
              mt={2}
              bg={"rgb(100, 53, 233)"}
              color={"#fff"}
              _hover={{ bg: "#fff", color: "rgb(100, 53, 233)" }}
            >
              Launch your Quest
            </Button>
          </Box>
        ),
        href: "#",
      },
    ],
  },
];

export const CRYPTO_AIRDROPS_BIG_CARDS_DATA = [
  {
    _id: 1,
    mainTitle: "Basics of Crypto",
    desc: "The safest and easiest place to start your crypto journey!",
    quests: 6,
    mainImageUrl: BasicsOfCryptoImageUrl,
    data: [
      {
        id: 1,
        title: "#1: But what is crypto and web3?",
        imageUrl:
          "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png",
        tasksAvailable: 11,
        isCompleted: false,
      },
      {
        id: 2,
        title: "#2: Setting up your own web3 wallet!",
        imageUrl:
          "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d425fe7f548542289fbd8919c89bc0ae.jpg",
        tasksAvailable: 8,
        isCompleted: false,
      },
      {
        id: 3,
        title: "#3: What the heck is a blockchain?",
        imageUrl:
          "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/67e4ee7d187545ccbd28b4a159076068.jpg",
        tasksAvailable: 8,
        isCompleted: false,
      },
      {
        id: 4,
        title: "#4: Swapping and bridging? What’s that?",
        imageUrl:
          "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/a0ad2f15685642b985913a3aef4208ff.jpg",
        tasksAvailable: 10,
        isCompleted: false,
      },
      {
        id: 5,
        title: "#5: NFTs and why they’re cool ;)",
        imageUrl:
          "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/23c818f39768450298bb540fc3043bf7.jpg",
        tasksAvailable: 6,
        isCompleted: false,
      },
      {
        id: 6,
        title: "#6: Doing quests and winning rewards!",
        imageUrl:
          "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/71ae875a31a54215af6e14fd113c60f6.jpg",
        tasksAvailable: 8,
        isCompleted: false,
      },
    ],
  },
  {
    _id: 2,
    mainTitle: "Introduction to Airdrops",
    desc: "Your best bet to make it big in crypto!",
    quests: 4,
    mainImageUrl: IntroductionToAirdropsImageUrl,
    data: [
      {
        id: 1,
        title: "#1: What are airdrops, and how can they change your life?",
        imageUrl:
          "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/6bb30883bc5042809b9d20926341f8ac.jpg",
        tasksAvailable: 7,
        isCompleted: false,
      },
      {
        id: 2,
        title: "#2: Types of airdrops",
        imageUrl:
          "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/c8d2455592d04b4f897b30da15836d5d.jpg",
        tasksAvailable: 10,
        isCompleted: false,
      },
      {
        id: 3,
        title: "#3: How to earn huge $$$ from airdrops?",
        imageUrl:
          "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d59b0ff5b37141b2baf3e5e39157f408.png",
        tasksAvailable: 11,
        isCompleted: false,
      },
      {
        id: 4,
        title: "#4: Things to keep in mind!",
        imageUrl:
          "https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/27d77aa021174529a9eae082de8196c9.jpg",
        tasksAvailable: 7,
        isCompleted: false,
      },
    ],
  },
];

export const CRYPTO_AIRDROPS_SHORT_CARDS_DATA = [
  {
    _id: 1,
    mainTitle: "Intract Certified: Learner NFT",
    desc: "Your crypto black-belt certificate",
    mainImageUrl:
      "https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/1b1912563b964393b0478949efad5ed3.png",
  },
  {
    _id: 2,
    mainTitle: "Intract Certified: Earner NFT",
    desc: "Your proof of airdrop expertise",
    mainImageUrl:
      "https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/83bd377d91ff441aa6f7c46a63c88506.png",
  },
];
