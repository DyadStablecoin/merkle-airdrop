import Image from "next/image"; // Images
import {eth} from "state/eth"; // State container
import Layout from "components/Layout"; // Layout wrapper
import {useRouter} from "next/router"; // Routing
import styles from "styles/pages/Home.module.scss"; // Page styles

// Setup project details
const tokenName: string = process.env.NEXT_PUBLIC_TOKEN_NAME ?? "Token Name";
const heading: string = process.env.NEXT_PUBLIC_HEADING ?? "Some heading";
const description: string =
  process.env.NEXT_PUBLIC_DESCRIPTION ?? "Some description";

export default function Home() {
  // Routing
  const {push} = useRouter();
  // Authentication status
  const {address}: {address: string | null} = eth.useContainer();

  return (
    <Layout>
      <div className={styles.home}>
        {/* Project logo */}
        <div>
          <Image src="/logo.png" alt="Logo" width={250} height={250} priority />
        </div>

        {/* Project introduction article, if it exists */}
        {process.env.NEXT_PUBLIC_ARTICLE ? (
          <a
            href={process.env.NEXT_PUBLIC_ARTICLE}
            target="_blank"
            rel="noopener noreferrer"
          >
            Introducing {tokenName}{" "}
            <Image src="/icons/arrow.svg" alt="Arrow" height={12} width={12} />
          </a>
        ) : null}

        {/* Project heading */}
        <h1>{heading}</h1>

        {/* Project description */}
        <div>
          <div>Welcome Honeycombs, Miladies, Llamas, and Wassies. </div>
          <br />
          <div>
            It’s time to claim your KEROSENE, the first endogenous collateral that accelerates the DYAD stablecoin’s growth without blowing it up.
          </div>
          <br />
          <div>
            We invite you follow us on <a href="https://x.com/0xDYAD">X</a> and join our <a href="http://discord.gg/z3wdvqM3kt">discord</a> if you haven’t already so you can get maximum upside from your airdrop.
          </div>
          {/* <div> */}
          {/*   <a href="https://x.com/0xDYAD">Twitter</a> */}
          {/* </div> */}
          {/* <div> */}
          {/*   <a href="http://discord.gg/z3wdvqM3kt">Discord</a> */}
          {/* </div> */}
        </div>

        {/* Claim button */}
        {!address ? (
          // If not authenticated, disabled
          <button disabled>Connect Wallet to Claim Tokens</button>
        ) : (
          // Else, reroute to /claim
          <button onClick={() => push("/claim")}>Claim Tokens</button>
        )}
      </div>
    </Layout >
  );
}
