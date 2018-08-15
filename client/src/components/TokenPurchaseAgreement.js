import React, { Component } from 'react';
import { Container, Grid, Segment, Image } from 'semantic-ui-react';
import axios from 'axios';

// ---------- images ------------
import TopBg from '../assets/images/us-gold-header-bg.jpg';
import BricksGold from '../assets/images/bricks-gold.png';
import GoldBars from '../assets/images/gold-bars.jpg';
import InfinityBlue from '../assets/images/infinity-blue.png';
import USGoldToken from '../assets/images/usg-token.png';
import PoweredByOpenNetwork from '../assets/images/powered-by-open-network.png';
import IconGoldBacked from '../assets/images/icon-panel-gold-backed.png';
import IconStableValue from '../assets/images/icon-panel-stable-value.png';
import IconPerfectExit from '../assets/images/icon-panel-perfect-exit.png';
import MainPanelsBg from '../assets/images/main-panels-bg.jpg';
import CubesColored from '../assets/images/cubes-colored.png';
import LinesColored from '../assets/images/lines-three-colored.png';
import CubeGold from '../assets/images/cube-gold.png';
import ChartBitcoin from '../assets/images/chart-bitcoin.jpg';
import ChartEthereum from '../assets/images/chart-ethereum.jpg';
import ChartUSGold from '../assets/images/chart-usgold.jpg';
import GoldOnGradient from '../assets/images/gold-bar-on-gradient.png';
import CubeColoredB from '../assets/images/cube-colored-b.png';
import BuyKeepRedeem from '../assets/images/buy-keep-redeem-bg-wide.jpg';
import PaymentsAccepted from '../assets/images/payments-accepted.png';

// ---------- partials -------------
import Img from './partials/Img';
import Footer from './partials/Footer';

// ---------- styling ---------------
import '../css/mailchimp.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2,
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH3, OpenH4, OpenH5, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  OpenUl, OpenLi,
  BorderedDiv, BorderedDivHead, BorderedDivBody,
  HoverCenterDiv, HoverCenterDivWrap,
  DividerGrayGrad,
  HrOrange,
  USGButton,
} from '../css/styledComponents';

// https://www.react-reveal.com/examples/
import Fade from 'react-reveal/Fade';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

const Content = () => (
  <div>
    <OpenH4 textAlign='center'>
        <strong>IMPORTANT INFORMATION:</strong><br />
        <strong>PLEASE READ THIS AGREEMENT CAREFULLY AND IN ITS ENTIRETY.</strong>
    </OpenH4>
    <OpenP>
        <strong>Buyer acknowledges, understands and agrees to the following:</strong>
    </OpenP>
    <OpenP textAlign='justify'>
        BINDING AGREEMENT: Buyer understands and agrees that Buyer is subject to and bound by this Agreement by virtue of Buyer’s purchase of USG Tokens.
    </OpenP>
    <OpenP textAlign='justify'>
        EXCEPT AS SET FORTH IN THE US GOLD CURRENCY LLC WEBSITE (USGOLD.IO), USG TOKENS HAVE NO RIGHTS, USES OR ATTRIBUTES. The USG Tokens do not have any rights, uses, purpose, attributes, functionalities or features, express or implied, including, without limitation, any uses, purpose, attributes, functionalities or features on the Platform. Company does not guarantee and is not representing in any way to Buyer that the USG Tokens have any rights, uses, purpose, attributes, functionalities or features.
    </OpenP>
    <OpenP textAlign='justify'>
        NOT A PURCHASE OF USG TOKENS. Buyer acknowledges, understands and agrees that Buyer should not expect and there is no guarantee or representation made by Company that Buyer will receive any other product, service, rights, attributes, functionalities, features or assets of any kind whatsoever, including, without limitation, any cryptographic tokens or digital assets now or in the future whether through receipt, exchange, conversion, redemption or otherwise.
    </OpenP>
    <OpenUl>
      <OpenLi>
        PURCHASE OF USG TOKENS ARE NON-REFUNDABLE AND PURCHASES CANNOT BE
        CANCELLED. BUYER MAY LOSE ALL AMOUNTS PAID.
      </OpenLi>
      <OpenLi>
        USG TOKENS MAY HAVE NO VALUE.
      </OpenLi>
      <OpenLi>
        COMPANY RESERVES THE RIGHT TO REFUSE OR CANCEL USG TOKEN PURCHASE
        REQUESTS AT ANY TIME IN ITS SOLE DISCRETION.
      </OpenLi>
      <OpenLi>
        PLEASE READ THE RISKS SET FORTH IN SECTION 7 CAREFULLY AND IN THEIR
        ENTIRETY.
      </OpenLi>
      <OpenLi>
        THIS AGREEMENT INCLUDES PRE-DISPUTE RESOLUTION IN SECTION 9.1 AND
        REQUIRES ARBITRATION IN SECTION 9.2
      </OpenLi>
    </OpenUl>
    <OpenH4>
        <strong>Article 1 <br />
        ACCEPTANCE OF AGREEMENT <br />
        AND PURCHASE OF USG TOKENS</strong>
    </OpenH4>

    <OpenP textAlign='justify'>
        Section 1.1 This Agreement shall be effective and binding on the
        Parties when Buyer: (a) clicks the check box on the official
        https://www.USGold.io website (the “Website”) to indicate that Buyer
        has read, understands and agrees to the terms of this Agreement; or, if
        earlier (b) upon Company’s receipt of payment from Buyer. Buyer agrees
        to be bound on this basis, and confirms that Buyer has read in full and
        understands this Agreement and the terms on which Buyer is bound.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 1.2 Company has established a User Agreement, as may be amended
        from time to time, for the Website located at
        https://www.USGold.io/user-agreement, which is hereby incorporated by
        reference. Buyer has read, understands and agrees to those terms.
    </OpenP>
    <OpenH5>
        Section 1.3 <u>USG Tokens</u>.
    </OpenH5>
    <OpenP textAlign='justify'>
        (a) <u>Purpose</u>. The USG Tokens do not have any rights, uses,
        purpose, attributes, functionalities or features, express or implied.
        The USG Tokens are not tradeable and they are not designed to be an
        investment, currency, security, commodity, a swap on a currency,
        security or commodity, or any other kind of financial instrument.
    </OpenP>
    <OpenP textAlign='justify'>
        (b) <u>Company’s Use of Proceeds</u>. Buyer acknowledges and
        understands that the proceeds from the sale of the USG Tokens will be
        utilized by Company in its sole discretion.
    </OpenP>
    <OpenH4>
        <strong>Article 2 <br />
        USG TOKEN DISTRIBUTION</strong>
    </OpenH4>
    <OpenP textAlign='justify'>
        Section 2.1 <u>Allocation and Distribution of USG Tokens</u>. The
Company intends to allocate and distribute USG Tokens (the “        <u>Token Distribution</u>”) in accordance with Schedule A, including
        without limitation, that the distribution will take place over several
        days and earlier buyers may receive more USG Tokens for the same amount
        paid. Company will provide specific procedures on how Buyer may
        purchase USG Tokens through the Website. By purchasing USG Tokens,
        Buyer represents and acknowledges that Buyer understands and has no
        objection to such procedures and specifications. Failure to use the
        Website and follow such procedures may result in Buyer not receiving
        any USG Tokens. Any buyer of USG Tokens may lose some or all of the
        amounts paid for USG Tokens. The access or use of the USG Distribution
        Contract and/or the receipt or purchase of USG Tokens through any other
        means other than the official Website are not sanctioned or agreed to
        in any way by the Company.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 2.2 <u>Allocation and Sale of USG Tokens to Company Parties</u>
        . Buyer understands and consents to the participation of Company’s
        past, present and future employees, officers, directors, contractors,
        consultants, equity holders, suppliers, vendors and service providers
        in the purchase of USG Tokens, including the purchase by people who may
        work on the development and implementation of the Platform or who may
        work for Company’s future businesses that Company may establish with a
        portion of the proceeds from the Token Distribution.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 2.3 <u>No Representations and Warranties</u>
        . Company makes no representations or warranties, express or implied,
        including, without limitation, any warranties of title or implied
        warranties of merchantability or fitness for a particular purpose with
        respect to the USG Distribution Contract or the USG Tokens or their
        utility, or the ability of anyone to purchase or use the USG Tokens for
        any purpose. Without limiting the foregoing, none of the Company
        Parties represent or warrant that the process of purchasing and/or
        receiving the USG Tokens will be uninterrupted or error-free or that
        the USG Tokens are reliable and error-free. As a result, Buyer
        acknowledges and understands that Buyer may never receive USG Tokens
        and may lose the entire amount Buyer paid to Company. Buyer shall
        provide an accurate digital wallet address to Company for receipt of
        any USG Tokens distributed to Buyer pursuant to the USG Distribution
        Contract.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 2.4 <u>Not an Offering of Securities, Commodities, or Swaps</u>
        . The sale of USG Tokens is not an offering of sale or to purchase
        securities and the USG Tokens themselves are not securities,
        commodities, swaps on either securities or commodities, or a fiat
        financial instrument of any kind. USG Tokens are a direct digital and
        tokenized representation of 1oz Gold American Eagle coin(s) – in
        cryptographic form, Minted by the United States of America. Buyer
        acknowledges and agrees that the purchase and sale of USG Tokens are
        not subject to the protections of any laws governing those types of
        financial instruments. This Agreement and all other documents referred
        to in this Agreement do not constitute a prospectus or offering
        document, and are not an offer to sell, nor the solicitation of an
        offer to buy an investment, a security, commodity, or a swap on either
        a security or commodity.
    </OpenP>
    <OpenH4>
        <strong>Article 3<br />
        NO OTHER RIGHTS CREATED</strong>
    </OpenH4>
    <OpenP textAlign='justify'>
        Section 3.1 <u>No </u> <u>Claim, Loan or Ownership Interest</u>. The
        purchase of USG Tokens: (a) represents a digital representation of an
        actual 1oz American Eagle Gold Coin and entitles the Buyer to receive
        such coin upon request and does not provide Buyer with rights of any
        form with respect to the Company or its revenues or assets, including,
        but not limited to, any voting, distribution, redemption, liquidation,
        proprietary (including all forms of intellectual property), or other
        financial or legal rights; (b) is not a debt obligation of or a loan to
        Company; and (c) does not provide Buyer with any equity ownership or
        other interest in Company.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 3.2 <u>Intellectual Property</u>. Company retains all right,
        title and interest in all of Company’s intellectual property,
        including, without limitation, inventions, ideas, concepts, code,
        discoveries, processes, marks, methods, software, compositions,
        formulae, techniques, information and data, whether or not patentable,
        copyrightable or protectable in trademark, and any trademarks,
        copyright or patents based thereon. Buyer may not use any of Company’s
        intellectual property for any reason without Company’s prior written
        consent.
    </OpenP>
    <OpenH4>
        <strong>Article 4<br />
        SECURITY AND DATA; TAXES</strong>
    </OpenH4>
    <OpenH5>
        Section 4.1 Security and Data Privacy.
    </OpenH5>
    <OpenP textAlign='justify'>
        (a) <u>Buyer’s Security</u>
        . Buyer will implement reasonable and appropriate measures designed to
        secure access to: (i) any device associated with Buyer and utilized in
        connection with Buyer’s purchase of USG Tokens; (ii) private keys to
        Buyer’s wallet or account; and (iii) any other username, passwords or
        other login or identifying credentials. In the event that Buyer is no
        longer in possession of Buyer’s private keys or any device associated
        with Buyer’s account or is not able to provide Buyer’s login or
        identifying credentials, Buyer may lose all of Buyer’s USG Tokens
        and/or access to Buyer’s account. Company is under no obligation to
        recover any USG Tokens and Buyer acknowledges, understands and agrees
        that all purchases of USG Tokens are non-refundable and Buyer will not
        receive a return of money or other compensation for any USG Tokens
        purchased.
    </OpenP>
    <OpenP textAlign='justify'>
        (b) <u>Additional Information</u>. Upon Company’s request, Buyer will
        immediately provide to Company information and documents that the
        Company, in its sole discretion, deems necessary or appropriate to
        comply with any laws, regulations, rules or agreements, including
        without limitation judicial process. Such documents include, but are
        not limited to, passport, driver’s license, utility bills, photographs
        of associated individuals, government identification cards, or sworn
        statements. Buyer consents to Company disclosing such information and
        documents in order to comply with applicable laws, regulations, rules
        or agreements. Buyer acknowledges that Company may refuse to distribute
        USG Tokens to Buyer until such requested information is provided.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 4.2 <u>Taxes</u>. Buyer acknowledges, understands and agrees
        that: (a) the purchase and receipt of USG Tokens may have tax
        consequences for Buyer; (b) Buyer is solely responsible for Buyer’s
        compliance with Buyer’s tax obligations; and (c) Company bears no
        liability or responsibility with respect to any tax consequences to
        Buyer.
    </OpenP>
    <OpenH4>
        <strong>Article 5<br />
        REPRESENTATIONS AND WARRANTIES OF BUYER</strong>
    </OpenH4>

    <OpenP textAlign='justify'>
        By buying USG Tokens, Buyer represents and warrants to Company that:
    </OpenP>

    <OpenP textAlign='justify'>
        Section 5.1. Authority. Buyer has all requisite power and authority to execute and
        deliver this Agreement, to use the USG Distribution Contract and
        purchase USG Tokens, and to carry out and perform its obligations
        under this Agreement.
    </OpenP>
    <OpenP textAlign='justify' paddingLeft='2em'>
        (a) If an individual, Buyer is at least 18 years old and of sufficient
        legal age and capacity to purchase USG Tokens.
    </OpenP>
    <OpenP textAlign='justify' paddingLeft='2em'>
        (b) If an entity or other legal person, Buyer is duly organized,
        validly existing and in good standing under the laws of its domiciliary
        jurisdiction and each jurisdiction where it conducts business.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 5.2 <u>No Conflict</u>. The execution, delivery and performance
        of this Agreement will not result in any violation of, be in conflict
        with, or constitute a material default under, with or without the
        passage of time or the giving of notice: (a) any provision of Buyer’s
        organizational documents, if applicable; (b) any provision of any
        judgment, decree or order to which Buyer is a party, by which it is
        bound, or to which any of its material assets are subject; (c) any
        material agreement, obligation, duty or commitment to which Buyer is a
        party or by which it is bound; or (d) any laws, regulations or rules
        applicable to Buyer.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 5.3 <u>No Consents or Approvals</u>. The execution and delivery
        of, and performance under, this Agreement require no approval or other
        action from any governmental authority or person other than Buyer.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 5.4 <u>Buyer Status</u>. Buyer is not subject to any of the
        disqualifying events listed in Rule 506(d)(1) of Regulation D under the
        Securities Act of 1933 (a “<u>Buyer Event</u>”), and there is no
        proceeding or investigation pending or, to the knowledge of Buyer,
        threatened by any governmental authority, that would reasonably be
        expected to become the basis for a Buyer Event.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 5.5 <u>Buyer Knowledge and Risks of Project</u>. Buyer has
        sufficient knowledge and experience in business and financial matters,
        including a sufficient understanding of blockchain or cryptographic
        tokens and other digital assets, smart contracts, storage mechanisms
        (such as digital or token wallets), blockchain-based software systems
        and blockchain technology, to be able to evaluate the risks and merits
        of Buyer’s purchase of USG Tokens, including but not limited, to the
        matters set forth in this Agreement, and is able to bear the risks
        thereof, including loss of all amounts paid, loss of USG Tokens, and
        liability to the Company Parties and others for its acts and omissions,
        including with limitation those constituting breach of this Agreement,
        negligence, fraud or willful misconduct. Buyer has obtained sufficient
        information in order to make an informed decision to purchase USG
        Tokens.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 5.6 <u>Funds; Payments</u>.
    </OpenP>
    <OpenP textAlign='justify' paddingLeft='2em'>
        (a) <u>Funds</u>. The funds, including any fiat, virtual currency or
        cryptocurrency, Buyer uses to purchase USG Tokens are not derived from
        or related to any unlawful activities, including but not limited to
        money laundering or terrorist financing, and Buyer will not use the USG
        Tokens to finance, engage in, or otherwise support any unlawful
        activities.
    </OpenP>
    <OpenP textAlign='justify' paddingLeft='2em'>
        (b) <u>Payments</u>. All payments by Buyer under this Agreement will be
        made only in Buyer’s name, from a digital wallet or bank account not
        located in a country or territory that has been designated as a
        “non-cooperative country or territory” by the Financial Action Task
        Force, and is not a “foreign shell bank” within the meaning of the U.S.
        Bank Secrecy Act (31 U.S.C. § 5311 <em>et seq</em>.), as amended, and
        the regulations promulgated thereunder by the Financial Crimes
        Enforcement Network, as such regulations may be amended from time to
        time.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 5.7 Miscellaneous Regulatory Compliance.
    </OpenP>
    <OpenP textAlign='justify' paddingLeft='2em'>
        (a) <u>Anti-Money Laundering; Counter-Terrorism Financing</u>. To the
        extent required by applicable law, Buyer agrees to comply with all
        anti-money laundering and counter-terrorism financing requirements
        which the Company may require.
    </OpenP>
    <OpenP textAlign='justify' paddingLeft='2em'>
        (b) <u>Sanctions Compliance</u>. Neither Buyer, nor any person having a
        direct or indirect beneficial interest in Buyer or USG Tokens being
        acquired by Buyer, or any person for whom Buyer is acting as agent or
        nominee in connection with USG Tokens, is the subject of sanctions administered or enforced by any country or government (collectively, “ <u>Sanctions</u>”) or is organized or resident in a country or territory that is the subject of country-wide or territory-wide Sanctions.
    </OpenP>
    <OpenH4>
        <strong>Article 6<br />
        DISCLAIMERS</strong>
    </OpenH4>
    <OpenP textAlign='justify'>
        Section 6.1 Buyer expressly acknowledges, understands and agrees
        that Buyer is using the USG Distribution Contract and purchasing
        USG Tokens at the Buyer’s sole risk and that the USG Distribution
        Contract and USG Tokens are each provided, used and acquired on an
        “AS IS” and on an “AS AVAILABLE” basis without representations,
        warranties, promises or guarantees whatsoever of any kind by
        Company and Buyer shall rely on its own examination and
        investigation thereof.
    </OpenP>
    <OpenP textAlign='justify'>
      Section 6.2 <u>No Representation or Warranty</u>. (A) COMPANY DOES NOT
      MAKE AND EXPRESSLY DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES,
      EXPRESS, IMPLIED OR STATUTORY; AND (B) WITH RESPECT TO THE USG
      DISTRIBUTION CONTRACT AND THE USG TOKENS, COMPANY SPECIFICALLY DOES NOT
      REPRESENT OR WARRANT AND EXPRESSLY DISCLAIMS ANY REPRESENTATION OR
      WARRANTY, EXPRESS, IMPLIED OR STATUTORY, INCLUDING WITHOUT LIMITATION,
      ANY REPRESENTATIONS OR WARRANTIES OF TITLE, NON-INFRINGEMENT,
      MERCHANTABILITY, USAGE, SUITABILITY OR FITNESS FOR ANY PARTICULAR
      PURPOSE, OR AS TO THE WORKMANSHIP OR TECHNICAL CODING THEREOF, OR THE
      ABSENCE OF ANY DEFECTS THEREIN, WHETHER LATENT OR PATENT.
    </OpenP>
    <OpenH4>
        <strong>Article 7<br />
        RISKS</strong>
    </OpenH4>

    <OpenP textAlign='justify'>
      USG TOKENS MAY HAVE NO VALUE. BUYER MAY LOSE ALL AMOUNTS PAID. Buyer has
      carefully reviewed, acknowledges, understands and assumes the following
      risks, as well as all other risks associated with the USG Tokens (including
      those not discussed herein), all of which could render the USG Tokens
      worthless or of little value:
    </OpenP>

    <OpenP textAlign='justify'>
      Section 7.1 <u>Basis for Purchase</u>. Purchasing USG Tokens is at
      Buyer’s sole risk and that the USG Tokens are each provided, used and
      acquired on an “AS IS” and on an “AS AVAILABLE” basis without
      representations, warranties, promises or guarantees whatsoever of any
      kind by Company. Buyer must rely on its own examination and
      investigation thereof.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 7.2 <u>No Other Rights, Functionality or Features</u>. USG
        Tokens have no rights, uses, purpose, attributes, functionalities or
        features, express or implied, outside the Platform.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 7.3 <u>Purchase Price Risk</u>. The distribution of USG Tokens
        will occur at the end of the Distribution Period. The purchase price a
        buyer receives for USG Tokens depends upon the actions of all other
        users sending ether (“ETH”) to the USG Token Contract during the same
        period. Everyone sending ETH during the same period receives the same
        price. It is possible for other people to send in a large amount of ETH
        after Buyer and dramatically increase the price Buyer and everyone else
        pays per USG Token received. There are no guarantees as to the price of
        USG Tokens purchased by Buyer and no guarantees that the price per USG
        Token determined for each period by the market will be equal to or
        higher than the price paid by Buyer. There is the possibility that the
        price per USG Token will fall below the price paid by initial buyers of
        USG Tokens during the Distribution Period. Company reserves the right
        to change the duration of the Distribution Period for any reason,
        including, without limitation, bugs in the Distribution Contract or the
        unavailability of the Website or other unforeseen procedural or
        security issues.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 7.4 <u>Blockchain Delay Risk</u>. On the Ethereum blockchain,
        timing of block production is determined by proof of work so block
        production can occur at random times. For example, Token transfers in a
        given open ledger may not be included in the next last-closed ledger,
        and may be included in the candidate set for the beginning of the
        consensus process on the next open ledger. As a result, the last-closed
        ledger may not include Buyer’s transaction at the time Buyer expects
        and Buyer may not receive Tokens on the same day Buyer purchases the
        Tokens; or, ETH contributed to the USG Distribution Contract in the
        final seconds of a distribution period may not get included for that
        period. Buyer acknowledges and understands that the Ethereum blockchain
        may not include the Buyer’s transaction at the time Buyer expects and
        Buyer may not receive USG Tokens the same day Buyer sends ETH.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 7.5 <u>Ethereum Blockchain</u>. The Ethereum blockchain is
        prone to periodic congestion during which transactions can be delayed
        or lost. Individuals may also intentionally spam the Ethereum network
        in an attempt to gain an advantage in purchasing cryptographic tokens.
        Buyer acknowledges and understands that Ethereum block producers may
        not include Buyer’s transaction when Buyer wants or Buyer’s transaction
        may not be included at all.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 7.6 <u>Third Party Attacks</u>. Transactions within the
        Platform may be delayed or lost due to operational error or malicious
        attacks by third parties. Buyer acknowledges and understands that the
        last-closed ledger may not include Buyer’s transaction when Buyer wants
        or expects and that Buyer’s transaction may be excluded or discarded
        entirely.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 7.7 <u>Operational Error</u>. Buyer may never receive USG
        Tokens and may lose the entire amount Buyer paid to Company for such
        USG Tokens as a result of interruptions and operational errors in the
        process of purchasing or receiving the USG Tokens.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 7.8 <u>Ability to Transact or Resell</u>. Buyer may be unable
        to sell or otherwise transact in USG Tokens at any time, or for the
        price Buyer paid. By using the USG Distribution Contract or by
        purchasing USG Tokens, Buyer acknowledges, understands and agrees that:
        (a) USG Tokens may have no value; (b) there is no guarantee or
        representation of liquidity for the USG Tokens; and (c) Company is not
        and shall not be responsible for or liable for the market value of USG
        Tokens, the transferability and/or liquidity of USG Tokens and/or the
        availability of any market for USG Tokens through third parties or
        otherwise.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 7.9 <u>Token Security</u>. USG Tokens may be subject to
        expropriation and or/theft. Hackers or other malicious groups or
        organizations may attempt to interfere with the USG Distribution
        Contract or the USG Tokens in a variety of ways, including, but not
        limited to, malware attacks, denial of service attacks, consensus-based
        attacks, Sybil attacks, smurfing and spoofing. Furthermore, because the
        Ethereum platform rests on open source software and USG Tokens are
        based on open source software, there is the risk that Ethereum smart
        contracts may contain intentional or unintentional bugs or weaknesses
        which may negatively affect the USG Tokens or result in the loss of
        Buyer’s USG Tokens, the loss of Buyer’s ability to access or control
        Buyer’s USG Tokens or the loss of ETH in Buyer’s account. In the event
        of such a software bug or weakness, there may be no remedy and holders
        of USG Tokens are not guaranteed any remedy, refund or compensation.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 7.10 <u>Access to Private Keys</u>. USG Tokens purchased by
        Buyer may be held by Buyer in Buyer’s digital wallet or vault, which
        requires a private key, or a combination of private keys, for access.
        Accordingly, loss of requisite private key(s) associated with Buyer’s
        digital wallet or vault storing USG Tokens will result in loss of such
        USG Tokens, access to Buyer’s USG Token balance and/or any initial
        balances in blockchains created by third parties. Moreover, any third
        party that gains access to such private key(s), including by gaining
        access to login credentials of a hosted wallet or vault service Buyer
        uses, may be able to misappropriate Buyer’s USG Tokens. Company is not
        responsible for any such losses.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 7.11 <u>Tax Consequences</u>. The purchase and receipt of USG
        Tokens may have tax consequences for Buyer. Buyer is solely responsible
        for Buyer’s compliance with Buyer’s tax obligations.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 7.12 <u>Reliance on Third-Parties</u>. Even if completed, the
        Platform will rely, in whole or partly, on third parties to adopt and
        implement it and to continue to develop, supply, and otherwise support
        it. There is no assurance or guarantee that those third parties will
        complete their work, properly carry out their obligations, or otherwise
        meet anyone’s needs, all of might have a material adverse effect on the
        Platform.
    </OpenP>

    <OpenP textAlign='justify'>
        Section 7.12. <u>Failure to Map a Public Key to Buyer’s Account</u>. Failure of Buyer to map a public key to Buyer’s account may result in third parties being unable to recognize Buyer’s USG Token balance on the Ethereum blockchain.
    </OpenP>

    <OpenP textAlign='justify'>
        Section 7.13 <u>Exchange &amp; Counterparty Risks</u>. If Buyer sends
        ETH to the USG Distribution Contract from an exchange or an account
        that Buyer does not control, USG Tokens will be allocated to the
        account that has sent ETH; therefore, Buyer may never receive or be
        able to recover Buyer’s USG Tokens. Furthermore, if Buyer chooses to
        maintain or hold USG Tokens through a cryptocurrency exchange or other
        third party, Buyer’s USG Tokens may be stolen or lost. In addition,
        third parties may not recognize Buyer’s claim to any derivative tokens
        if and when launched by third parties according to the distribution
        rules set in the Platform. By using the USG Distribution Contract
        and/or by purchasing USG Tokens, Buyer acknowledges and agrees that
        Buyer sends ETH to the USG Distribution Contract through an exchange
        account and/or holds Tokens on a cryptocurrency exchange or with
        another third party at Buyer’s own and sole risk.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 7.14 <u>Uncertain Regulatory Framework</u>. The regulatory
        status of cryptographic tokens, digital assets and blockchain
        technology is unclear or unsettled in many jurisdictions. It is
        difficult to predict how or whether governmental authorities will
        regulate such technologies. It is likewise difficult to predict how or
        whether any governmental authority may make changes to existing laws,
        regulations and/or rules that will affect cryptographic tokens, digital
        assets, blockchain technology and its applications. Such changes could
        negatively impact USG Tokens in various ways, including, for example,
        through a determination that USG Tokens are regulated financial
        instruments that require registration. Company may cease the
        distribution of USG Tokens, the development of the Platform or cease
        operations in a jurisdiction in the event that governmental actions
        make it unlawful or commercially undesirable to continue to do so.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 7.15 <u>Risk of Government Action</u>. The Company engages in
        cross border data storage and faciliatation. The global data
        transmission and storage industries are subject to heightened oversight
        and scrutiny, and may be subject to investigations or enforcement
        actions. There can be no assurance that governmental authorities will
        not examine the operations of Company and/or pursue enforcement actions
        against Company. Such governmental activities may or may not be the
        result of targeting Company in particular. All of this may subject
        Company to judgments, settlements, fines or penalties, or cause Company
        to restructure its operations and activities or to cease offering
        certain products or services, all of which could harm Company’s
        reputation or lead to higher operational costs, which may in turn have
        a material adverse effect on the USG Tokens and/or the development of
        the Platform
    </OpenP>
    <OpenP textAlign='justify'>
        Section 7.16 <u>Additional Risks</u>. The Tokens and the Platform are
        subject to such additional risks as set forth on <u>Schedule B</u>.
    </OpenP>
    <OpenH4>
      <strong>Article 8<br />
      LIMITATION OF LIABILITY; INDEMNIFICATION</strong>
    </OpenH4>
    <OpenP textAlign='justify'>
        Section 8.1 <u>Limitation of Liability</u>. To the fullest extent
        permitted by applicable law, Buyer disclaims any right or cause of
        action against Company of any kind in any jurisdiction that would give
        rise to any Damages whatsoever, on the part of Company. Company shall
        not be liable to Buyer for any type of damages, whether direct,
        indirect, incidental, special, punitive, consequential or exemplary
        (including damages for lost profits, goodwill, use or data), even if
        and notwithstanding the extent to which Company has been advised of the
        possibility of such damages. Buyer agrees not to seek any refund,
        compensation or reimbursement from a Company Party, regardless of the
        reason, and regardless of whether the reason is identified in this
        Agreement.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 8.2 <u>Damages</u>. In no circumstances will the aggregate
        joint liability of the Company Parties, whether in contract, warrant,
        tort or other theory, for Damages to Buyer under this Agreement exceed
        the amount received by Company from Buyer.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 8.3 <u>Force Majeure</u>. Buyer understands and agrees that
        Company shall not be liable and disclaims all liability to Buyer in
        connection with any force majeure event, including acts of God, labor
        disputes or other industrial disturbances, electrical,
        telecommunications, hardware, software or other utility failures,
        software or smart contract bugs or weaknesses, earthquakes, storms, or
        other nature-related events, blockages, embargoes, riots, acts or
        orders of government, acts of terrorism or war, technological change,
        changes in interest rates or other monetary conditions, and, for the
        avoidance of doubt, changes to any blockchain-related protocol.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 8.4 <u>Release</u>. To the fullest extent permitted by
        applicable law, Buyer releases Company from responsibility, liability,
        claims, demands, and/or damages of every kind and nature, known and
        unknown (including, but not limited to, claims of negligence), arising
        out of or related to disputes between Buyer and the acts or omissions
        of third parties.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 8.5 <u>Indemnification</u>.
    </OpenP>
    <OpenP textAlign='justify' paddingLeft='2em'>
        (a) To the fullest extent permitted by applicable law, Buyer will
        indemnify, defend and hold harmless and reimburse Company from and
        against any and all actions, proceedings, claims, damages, demands and
        actions (including without limitation fees and expenses of counsel),
        incurred by Company arising from or relating to: (i) Buyer’s purchase
        or use of USG Tokens; (ii) Buyer’s responsibilities or obligations
        under this Agreement; (iii) Buyer’s breach of or violation of this
        Agreement; (iv) any inaccuracy in any representation or warranty of
        Buyer; (v) Buyer’s violation of any rights of any other person or
        entity; and/or (vi) any act or omission of Buyer that is negligent,
        unlawful or constitutes willful misconduct.
    </OpenP>
    <OpenP textAlign='justify' paddingLeft='2em'>
        (b) Company reserves the right to exercise sole control over the
        defense, at Buyer’s expense, of any claim subject to indemnification
        under this Section 8.5. This indemnity is in addition to, and not in
        lieu of, any other indemnities set forth in a written agreement between
        Buyer and Company.
    </OpenP>
    <OpenH4>
      <strong>Article 9<br />
      DISPUTE RESOLUTION</strong>
    </OpenH4>

    <OpenP textAlign='justify'>
        Section 9.1 <u>Informal Dispute Resolution</u>. Buyer and Company shall
        cooperate in good faith to resolve any dispute, controversy or claim
        arising out of, relating to or in connection with this Agreement,
        including with respect to the formation, applicability, breach,
        termination, validity or enforceability thereof (a “<u>Dispute</u>”).
        If the Parties are unable to resolve a Dispute within ninety (90) days
        of notice of such Dispute being received by all Parties, such Dispute
        shall be finally settled by Binding Arbitration as defined in Section
        9.2 below.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 9.2 <u>Binding Arbitration</u>. Any Dispute not resolved within
        90 days as set forth in Section 9.1 shall be referred to and finally
        resolved by arbitration under the rules of the Costa Rica in effect at
        the time of the arbitration, except as they may be modified herein or
        by mutual agreement of the Parties. The number of arbitrators shall be
        one who shall be selected by Company. The seat, or legal place, of
        arbitration shall be Salt Lake City, Utah. The language to be used in
        the arbitral proceedings shall be English. The governing law of the
        Agreement shall be as set forth in Section 10.1 herein. The arbitration
award shall be final and binding on the Parties (“        <u>Binding Arbitration</u>”). The Parties undertake to carry out any
        award without delay and waive their right to any form of recourse
        insofar as such waiver can validly be made. Judgment upon the award may
        be entered by any court having jurisdiction thereof or having
        jurisdiction over the relevant Party or its assets. Company and Buyer
        will each pay their respective attorneys’ fees and expenses.
        Notwithstanding the foregoing,
    </OpenP>
    <OpenP textAlign='justify'>
Section 9.3        <u>No Class Arbitrations, Class Actions or Representative Actions</u>.
        Any dispute arising out of or related to this Agreement is personal to
        Buyer and Company and will not be brought as a class arbitration, class
        action or any other type of representative proceeding. There will be no
        class arbitration or arbitration in which an individual attempts to
        resolve a dispute as a representative of another individual or group of
        individuals. Further, a dispute cannot be brought as a class or other
        type of representative action, whether within or outside of
        arbitration, or on behalf of any other individual or group of
        individuals.
    </OpenP>
    <OpenH4>
        <strong>Article 10<br />
        MISCELLANEOUS</strong>
    </OpenH4>

    <OpenP textAlign='justify'>
        Section 10.1 <u>Governing Law and Venue</u>. This Agreement shall be
        governed in all respects, including as to validity, interpretation and
        effect, by the laws of Wyoming, without giving effect to its principles
        or rules of conflict of laws, to the extent such principles or rules
        are not mandatorily applicable by statute and would permit or require
        the application of the laws of another jurisdiction.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 10.2 <u>Assignment</u>. Buyer shall not assign this Agreement
        without the prior written consent of Company. Any assignment or
        transfer in violation of this Section 10.2 will be void. Company may
        assign this Agreement to an affiliate. Subject to the foregoing, this
        Agreement, and the rights and obligations of the Parties hereunder,
        will be binding upon and inure to the benefit of their respective
        successors, assigns, heirs, executors, administrators and legal
        representatives.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 10.3 <u>Entire Agreement</u>. This Agreement, including the
        exhibits attached hereto and the materials incorporated herein by
        reference, constitutes the entire agreement between the Parties and
        supersedes all prior or contemporaneous agreements and understandings,
        both written and oral, between the Parties with respect to the subject
        matter hereof, including, without limitation, any public or other
        statements or presentations made by Company about the USG Tokens or the
        Platform.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 10.4 <u>Severability</u>. If any provision of this Agreement is
        determined by a court of competent jurisdiction to be invalid,
        inoperative or unenforceable for any reason, the provision shall be
        modified to make it valid and, to the extent possible, effectuate the
        original intent of the Parties as closely as possible in an acceptable
        manner in order that the transactions contemplated hereby be
        consummated as originally contemplated to the fullest extent possible.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 10.5 <u>Modification of Agreement</u>. Company may modify this
        Agreement at any time by posting a revised version on the Website,
        available at [Insert Web address]. The modified terms will become
        effective upon posting. It is Buyer’s responsibility to check the
        Website regularly for modifications to this Agreement. This Agreement
        was last modified on the date listed at the beginning of this
        Agreement.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 10.6 <u>Termination of Agreement; Survival</u>. This Agreement
        will terminate upon the completion of all sales in the USG Token
        Distribution. Company reserves the right to terminate this Agreement,
        in its sole discretion, in the event that Buyer breaches this
        Agreement. Upon termination of this Agreement: (a) all of Buyer’s
        rights under this Agreement immediately terminate; (b) Buyer is not
        entitled to a refund of any amount paid; and (c) Articles 3, 4, 6, 7,
        8, 9, and 10 will continue to apply in accordance with their terms.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 10.7 <u>No Waivers</u>. The failure by Company to exercise or
        enforce any right or provision of this Agreement will not constitute a
        present or future waiver of such right or provision nor limit Company’s
        right to enforce such right or provision at a later time. All waivers
        by Company must be unequivocal and in writing to be effective.
    </OpenP>
    <OpenP textAlign='justify'>
Section 10.8        <u>No Partnership; No Agency; No Third Party Beneficiaries</u>. Nothing
        in this Agreement and no action taken by the Parties shall constitute,
        or be deemed to constitute, a partnership, association, joint venture
        or other co-operative entity between the Parties. Nothing in this
        Agreement and no action taken by the Parties pursuant to this Agreement
        shall constitute, or be deemed to constitute, either Party the agent of
        the other Party for any purpose. No Party has, pursuant to this
        Agreement, any authority or power to bind or to contract in the name of
        the other Party. This Agreement does not create any third party
        beneficiary rights in any person.
    </OpenP>
    <OpenP textAlign='justify'>
        Section 10.9 <u>Electronic Communications</u>. Buyer agrees and
        acknowledges that all agreements, notices, disclosures and other
        communications that Company provides Buyer pursuant to this Agreement
        or in connection with or related to Buyer’s purchase of USG Tokens,
        including this Agreement, may be provided by Company, in its sole
        discretion, to Buyer, in electronic form.
    </OpenP>

    <OpenP textAlign='left'>
        <strong>Purchaser</strong>
    </OpenP>
    <OpenP textAlign='left'>
        <strong></strong>
    </OpenP>
    <OpenP textAlign='left'>
        <strong>Name :________________________________________</strong>
    </OpenP>
    <OpenP textAlign='left'>
        <strong>Date:__________________________________________</strong>
    </OpenP>
    <OpenP textAlign='left'>
        <strong>Location: _____________________________________</strong>
    </OpenP>
    <OpenP textAlign='left'>
        <strong></strong>
    </OpenP>
    <OpenP textAlign='left'>
        <strong></strong>
    </OpenP>
    <OpenP textAlign='left'>
        <strong>Signature:____________________________________</strong>
    </OpenP>
    <OpenP textAlign='left'>
        <strong>US Gold Currency LLC</strong>
    </OpenP>
    <OpenP textAlign='left'>
        <strong>Name: ________________________________________</strong>
    </OpenP>
    <OpenP textAlign='left'>
        <strong>Title: __________________________________________</strong>
    </OpenP>
    <OpenP textAlign='left'>
        <strong>Date: __________________________________________</strong>
    </OpenP>
    <OpenP textAlign='left'>
        <strong></strong>
    </OpenP>
    <OpenP textAlign='left'>
        <strong></strong>
    </OpenP>
    <OpenP textAlign='left'>
        <strong>Signature:______________________________________</strong>
    </OpenP>
    <br clear="all"/>

    <OpenH4>
        <strong><u>SCHEDULE A</u></strong>
    </OpenH4>
    <OpenP textAlign='center'>
        <strong>USG Token Purchase</strong>
    </OpenP>
    <OpenP textAlign='justify'>
        This Schedule A contains the terms, references, and conditions from the
        Agreement dated June 30, 2018 and is an agreement between
        _________________________ (“<u>Buyer</u>” or “<u>you</u>”) and US Gold
        Currency LLC (together with its affiliates, “<u>Company</u>”). Buyer and
        Company are herein referred to individually as a “<u>Party</u>” and
        collectively, as the “<u>Parties</u>”.
    </OpenP>
    <OpenP>
        <strong>Token Price </strong>
    </OpenP>
    <OpenP textAlign='justify'>
        1. The price per Token will be $1627.50 (USD) in cash form – United States
        Dollars, and any of the following cryptocurrencies: Bitcoin (BTC), Ethereum
        (ETH) and other cryptocurrencies as they become acceptable. They will be
        accepted as payment for tokens according to applicable exchange rates
        published on cryptocompare.com as of the time your unique deposit address
        receives Bitcoin or Ether from you as payment for Tokens, according to the
        procedures set forth in Section 3 of this <u>Schedule A</u>. Company
        reserves the right to lower the price per Token, at its sole discretion,
        during the crowdsale.
    </OpenP>
    <OpenP>
        <strong>
            Commencement, Duration and Completion of Token Distribution
        </strong>
    </OpenP>
    <OpenP textAlign='justify'>
        2. The Company will conduct a crowdsale period which will begin on June 30,
        2018, at 5:00 p.m. PST and will continue until USG reaches the hard cap of
        $1B Ether or Bitcoin or until June 30, 2020, at 4:59 p.m. PST, whichever
        comes first.
    </OpenP>
    <OpenP>
        <strong>Procedures for Buying and Receiving Tokens </strong>
    </OpenP>
    <OpenP textAlign='justify'>
        3. To purchase Tokens during the crowdsale period, you must have certain
        token wallets established and operational. Specifically, you must have: (i)
        either an Ethereum wallet if you wish to purchase Tokens using Ether or a
        Bitcoin wallet if you wish to purchase Tokens using Bitcoin, and (ii) an
        Ethereum wallet that supports the ERC20 token standard in order to receive
        Tokens that you purchase from the Company. Company reserves the right to
        prescribe additional guidance regarding specific wallet requirements.
    </OpenP>
    <OpenP textAlign='justify'>
        At the Launch Date, Company will make available a web application to
        facilitate your purchase and receipt of Tokens. If you wish to purchase
        Tokens, you must provide either your Bitcoin address (if you wish to
        purchase Tokens using Bitcoin) or your Ethereum address (if you wish to
        purchase Tokens using Ether) to the web application as a return address.
        Company may also request certain optional information, such as an email
        address, through the web interface.
    </OpenP>
    <OpenP textAlign='justify'>
        The web application will then send you a unique deposit address for Bitcoin
        (if you provided a Bitcoin address) or Ether (if you provided an Ethereum
        address). Once the unique deposit address has received Bitcoin or Ether
        from you, Company will authorize the Smart Contract System to deliver
        Tokens to the Ethereum ERC20 wallet address that you provided to Company
        for delivery of the Tokens. The Smart Contract System is deployed by
        Company from Costa Rica, and is programmed so that all transactions it
        executes will be executed in Costa Rica.
    </OpenP>
    <OpenP textAlign='justify'>
        The Company anticipates that delivery of Tokens from the Smart Contract
        System to purchasers will occur before the conclusion of the crowdsale on
        June 30, 2019, but reserves the right to delay delivery up to four weeks
        after the conclusion of the crowdsale. Although the Company does not
        anticipate any security issues arising from the distribution of Tokens,
        this four week timeframe is intended as a precautionary buffer period for
        Company to resolve any such security issues.
    </OpenP>
    <OpenP>
        <strong>Tokens to be Sold</strong>
    </OpenP>
    <OpenP textAlign='justify'>
        4. The Company anticipates selling approximately Six-hundred thousand
        (600,000) USG Tokens during the crowdsale. The Tokens to be sold during the
        crowdsale will be from a pool of Company Owned Tokens transferred from the
        Company Wallet to the Smart Contract System. All Tokens will be of equal
        value and functionality.
    </OpenP>
    <OpenP>
        <strong>Tokens Retained by Company </strong>
    </OpenP>
    <OpenP textAlign='justify'>
        5. Tokens not sold during the crowdsale will be retained by the Company
        (the “Reserve Tokens”). The Reserve Tokens retained will be placed into
        time-locked smart contracts and remain in a locked state for at least three
        (3) months.
    </OpenP>
    <OpenP textAlign='justify'>
        Over time, the Company currently anticipates using the Reserve Tokens to
        compensate employees (including salaries and non-salary compensation), to
        fund future development of Platform, provide grants to (or purchase equity
        stakes in) third-parties working on projects in the USG ecosystem, donate
        Tokens to non-profit entities, and support general development of the USG
        ecosystem. These anticipated purposes are listed for illustration only, and
        Company reserves the right to use Reserve Tokens for these purposes (or
        others) at its sole discretion.
    </OpenP>

    <OpenP>
        <strong>
            Tokens or Distribution Proceeds Retained by Founders and Existing
            Investors
        </strong>
    </OpenP>
    <OpenP textAlign='justify'>
        6. Except to the extent paid as compensation for work performed for the
        Company, neither the founders nor the existing investors of the Company
        will receive Reserve Tokens from Company or any amount of the Ether or
        Bitcoin that is used to purchase Tokens from Company during the crowdsale.
    </OpenP>
    <OpenP>
        <strong>Presale of Tokens</strong>
    </OpenP>
    <OpenP textAlign='justify'>
        7. The Company may commit to sell a certain portion of Tokens before the
        Launch Date (“Token Presale”). Under such Token Presale arrangements, by
        agreeing to pay Company for Tokens before the Launch Date, a Token Presale
        purchaser may purchase Tokens at a discounted rate. Token Presale
        purchasers must acknowledge and agree to be bound by these Terms, and
        receive Tokens pursuant to the procedures for receiving Tokens set forth in
        Section 3 of this Schedule A. The discounts and time-lock periods under
        Token Presale arrangements generally depend on the amount of Tokens that
        the Presale purchaser agrees to purchase.
    </OpenP>
    <OpenP>
        <strong>Use of Proceeds from Token Distribution </strong>
    </OpenP>
    <OpenP textAlign='justify'>
        8. The Bitcoin and Ether proceeds from Company’s distribution of Tokens
        will be used to compensate technical and non-technical staff, licensing
        fees, cover marketing costs and operating expenses, and develop technical
        infrastructure. Currently, we envision that our development of technical
        infrastructure will focus on two primary areas. The first area of
        development involves strengthening and enhancement of our existing
        Platform, services and related infrastructure.
    </OpenP>
    <OpenP textAlign='justify'>
        The second area of development involves our anticipated initiatives for
        creating new tools, capabilities and functions for the Services and
        Platform on an international basis.
    </OpenP>
    <OpenP textAlign='justify'>
        At a more detailed level, the following is an overview of how the Company
        currently anticipates using the Bitcoin and Ether proceeds from the
        distribution of Tokens:
    </OpenP>
    <OpenP textAlign='justify'>
        The funds collected will cover the expenses of the project until the
        project starts making profit and sufficient cash flow to function on its
        own.
    </OpenP>
    <OpenP>
        The key expenses for these funds collected are as follows:
    </OpenP>
    <OpenUl>
      <OpenLi>
        Cost of Bullion Coin Product
      </OpenLi>
      <OpenLi>
        Insured Vault Storage of Bullion Coin Product
      </OpenLi>
      <OpenLi>
        Staff salaries
      </OpenLi>
      <OpenLi>
        Sales and marketing expenses
      </OpenLi>
      <OpenLi>
        Recruiting, partnership building, and business development
      </OpenLi>
      <OpenLi>
        App development costs
      </OpenLi>
    </OpenUl>

    <OpenP textAlign='justify'>
        The company will use the crowdsale proceeds primarily for the development
        of the Platform. The amount raised and used may vary based on changing
        market, technological, business, and other factors.
    </OpenP>

    <OpenH5 textAlign='center'>
        <u>Schedule B</u>
    </OpenH5>
    <OpenP textAlign='justify'>
      <strong>
        Certain Risks Relating to Purchase, Distribution and Use of Tokens
      </strong>
    </OpenP>
    <OpenP textAlign='justify'>
      <strong>
        YOU CLEARLY UNDERSTAND THAT BLOCKCHAIN, ETHEREUM, BITCOIN, USG ARE NEW
        AND UNVERIFIED TECHNOLOGIES THAT ARE BEYOND CONTROL OF USG, AND
        COLLATERAL CHANGES IN MARKET FORCES AND TECHNOLOGIES IN LOOSE
        INTERPRETATION WILL SERVE AS AS JUSTIFICATION OF USG’S EXECUTION OF
        THESE TERMS.
      </strong>
    </OpenP>
    <OpenP textAlign='justify'>
      IN PARTICULAR, AND IN ADDITION TO TERMS OF THIS DOCUMENT, YOU BEAR FULL
      RESPONSIBILITY FOR ANY RISKS DESIGNATED IN THE PROPOSED DOCUMENTATION.
    </OpenP>
    <OpenP textAlign='justify'>
      THE COMPANY, OUR AFFILIATED ENTITIES ARE NOT LIABLE FOR ANY DIRECT,
      INDIRECT, INCIDENTAL, SPECIAL, LOGICALLY CONSEQUENTIAL OR EXEMPLARY DAMAGE
      (INCLUDING DAMAGE IN PROFIT LOSS, REPUTATION LOSS, LOSING USAGE CAPABILITY
      OR DATA), EVEN IF WE WERE WARNED ABOUT POSSIBILITY OF SUCH LOSSES. NEXT,
      NEITHER US NOR OUR AFFILIATED ENTITIES NEITHER OR WILL NOT BE LIABLE FOR
      PAYMENT OF COMPENSATIONS, REIMBURSEMENT OF FUNDS OR LOSSES RELATED WITH:
      (A) YOUR INABILITY TO USE USG RESULTING FROM, WITHOUT LIMITATION,
      TERMINATION OR SUSPENSION OF THE COMPANY’S ACTIVITY OR THESE TERMS,
      INCLUDING STOPPING POWER SUPPLY, SERVICE, DEFECTS AND MALFUNCTIONS OF THE
      SYSTEM OR OTHER VIOLATIONS; (B) EXPENSES FOR PURCHASE OF SUBSTITUTE GOODS
      OR SERVICES; (C) ANY EXPENSES OR LIABILITIES APPLIED TO YOU BY THESE TERMS,
      USAGE OR ACCESS TO AMM; OR (D) ANY UNAUTHORIZED ACCESS, CHANGE OR REMOVAL,
      DESTRUCTION, DAMAGE, LOSS OR INABILITY TO USE ANY DATA, INCLUDING RECORDS,
      PERSONAL KEY OR OTHER REGISTRATION DATA RELATED TO ANY AMM, NOT DEPENDING
      ON THEIR ACQUISITION ACCORDING TO THESE TERMS, AS PART OF FINAL
      DISTRIBUTION.
    </OpenP>
    <OpenP textAlign='justify'>
      IN ANY CASE, THE COMPREHENSIVE LIABILITY APPLIED TO US, OUR AFFILIATED
      ENTITIES, ACCORDING TO THESE TERMS, IS LIMITED BY COST THAT YOU HAVE PAID
      TO US IN EXCHANGE FOR PROPOSAL WITHIN THESE TERMS.
    </OpenP>
    <OpenP textAlign='justify'>
      YOU WAIVE RIGHTS TO GET BACK ANY AMOUNTS WHICH YOU HAVE PAID TO US IN
      EXCHANGE FOR TOKES, IN ANY CIRCUMSTANCES, INCLUDING, WITHOUT LIMITATIONS,
      REQUIREMENT OF ACTUAL EXECUTION.
    </OpenP>
    <OpenP textAlign='justify'>
      <strong>Important Note:</strong>
      As noted elsewhere in these Terms, the Tokens are not being structured or
      sold as securities or a form of investment product. The information
      presented in this Schedule B is intended to set forth certain risks that
      you should consider in forming the basis for an investment decision.
    </OpenP>
    <OpenP textAlign='justify'>
      By purchasing, holding and using Tokens, you expressly acknowledge and
      assume the following risks:
    </OpenP>
    <OpenP>
      <strong>
        Risk of Losing Access to Tokens Due to Loss of Private Key(s)
      </strong>
    </OpenP>
    <OpenP textAlign='justify'>
        1. A private key, or a combination of private keys, is necessary to control
        and dispose of Tokens stored in your digital wallet or vault. Accordingly,
        loss of requisite private key(s) associated with your digital wallet or
        vault storing Tokens will result in loss of such Tokens. Moreover, any
        third party that gains access to such private key(s), including by gaining
        access to login credentials of a hosted wallet service you use, may be able
        to misappropriate your Tokens.
    </OpenP>
    <OpenP>
        <strong> Risks Associated with the Ethereum Protocol </strong>
    </OpenP>
    <OpenP textAlign='justify'>
        2. Because Tokens and the Platform are based on the Ethereum protocol, any
        malfunction, breakdown or abandonment of the Ethereum protocol may have a
        material adverse effect on the Platform or Tokens. Moreover, advances in
        cryptography, or technical advances such as the development of quantum
        computing, could present risks to the Tokens and the Platform by rendering
        ineffective the cryptographic consensus mechanism that underpins the
        Ethereum protocol.
    </OpenP>
    <OpenP>
        <strong>Risk of Mining Attacks</strong>
    </OpenP>
    <OpenP textAlign='justify'>
        3. As with other decentralized cryptographic tokens based on the Ethereum
        protocol, the Tokens are susceptible to attacks by miners in the course of
        validating Token transactions on the Ethereum blockchain, including, but
        not limited, to double-spend attacks, majority mining power attacks, and
        selfish-mining attacks. Any successful attacks present a risk to the
        Platform and the Tokens, including, but not limited to, accurate execution
        and recording of transactions involving Tokens.
    </OpenP>
    <OpenP>
        <strong> Risks Associated with Markets for Tokens </strong>
    </OpenP>
    <OpenP textAlign='justify'>
        4. The Tokens are intended to be used solely within the Platform, and
        Company will not support or otherwise facilitate any secondary trading or
        external valuation of Tokens. This restricts the contemplated avenues for
        using Tokens to the provision or receipt of Services,and could therefore
        create illiquidity risk with respect to the Tokens you hold. Even if
        secondary trading of Tokens is facilitated by third party exchanges, such
        exchanges may be relatively new and subject to little or no regulatory
        oversight, making them more susceptible to fraud or manipulation.
        Furthermore, to the extent that third parties do ascribe an external
        exchange value to Tokens (e.g., as denominated in a digital or fiat
        currency), such value may be extremely volatile and diminish to zero.
    </OpenP>
    <OpenP>
        <strong>
            Risk of Insufficient Interest in the Platform or Distributed
            Applications
        </strong>
    </OpenP>
    <OpenP textAlign='justify'>
        5. It is possible that the Platform will not be used by a large number of
        individuals, companies and other entities or that there will be limited
        public interest in the creation and development of distributed ecosystems
        (such as the Platform) more generally. Such a lack of use or interest could
        negatively impact the development of the Platform and therefore the
        potential utility of Tokens.
    </OpenP>
    <OpenP>
        <strong>
            Risks Associated with the Development and Maintenance of the Platform
        </strong>
    </OpenP>
    <OpenP textAlign='justify'>
        6. The Platform is still under development and may undergo significant
        changes over time. We may have to make changes to the specifications of the
        Tokens or Platform for any number of legitimate reasons. This could create
        the risk that the Tokens or Platform, as further developed and maintained,
        may not meet your expectations at the time of purchase. Furthermore,
        despite our good faith efforts to develop and maintain the Platform, it is
        still possible that the Platform will experience malfunctions or otherwise
        fail to be adequately developed or maintained, which may negatively impact
        the Platform and Tokens.
    </OpenP>
    <OpenP>
        <strong>
            Risk of an Unfavorable Fluctuation of Ether and Other Currency Value
        </strong>
    </OpenP>
    <OpenP textAlign='justify'>
        7. The Company team intends to use the proceeds from selling Tokens to fund
        the maintenance and development of the Platform, as described further in
        Schedule A. The proceeds of the Token distribution will be denominated in
        Ether or Bitcoin, and converted into other cryptographic and fiat
        currencies. In addition, some pre-distribution of the Tokens may also be
        denominated in fiat currencies. If the value of Ether or other currencies
        fluctuates unfavorably during or after the crowdsale, the Company team may
        not be able to fund development, or may not be able to develop or maintain
        the Platform in the manner that it intended.
    </OpenP>
    <OpenP>
        <strong>Risk of Dissolution of the Company or Platform </strong>
    </OpenP>
    <OpenP textAlign='justify'>
        8. It is possible that, due to any number of reasons, including, but not
        limited to, an unfavorable fluctuation in the value of Ether (or other
        cryptographic and fiat currencies), decrease in the Tokens’ utility, the
        failure of commercial relationships, or intellectual property ownership
        challenges, the Platform may no longer be viable to operate and the Company
        may dissolve.
    </OpenP>
    <OpenP>
        <strong>Risks Arising from Lack of Governance Rights </strong>
    </OpenP>
    <OpenP textAlign='justify'>
        9. Because Tokens confer no governance rights of any kind with respect to
        the Platform or Company or its corporate affiliates, all decisions
        involving the Platform or Company will be made by Company at its sole
        discretion, including, but not limited to, decisions to discontinue the
        Platform, to create and sell more Tokens for use in the Platform, or to
        sell or liquidate the Company. These decisions could adversely affect the
        Platform and the Tokens you hold.
    </OpenP>
    <OpenP>
        <strong>
            Risk of unfavorable regulation measures within one or more legal
            systems
        </strong>
    </OpenP>
    <OpenP textAlign='justify'>
        11. Crypto Tokens are subject to thorough researches of many regulatory
        bodies and will be controlled by legal and regulatory bodies of several
        legal systems of the world. Tokens functionality may be subject to one or
        several regulatory investigations or measures, including but not limited to
        ban of use or possession of electronic tokens such as Tokens, which may
        prevent development of the Company to limit it. The Company may receive
        notifications, requests, warnings, requirements or court orders from one or
        more bodies with notification about it, as well as orders of suspension or
        termination of activity related to Tokens Distribution fully and without
        prior notification.
    </OpenP>
    <OpenP textAlign='justify'>
        In addition, many aspects of the Platform and the Token include unverified
        areas of legislation and regulation and may become subject to new
        legislation and regulation, therefore it appears impossible to predict
        outcomes of legal regulation of those aspects within any given
        jurisdiction. Any planning, development, marketing, promotion,
        implementation and other actions of the Company as part of Tokens
        Distribution as a result may be subject to serious influence, impeded,
        postponed or cancelled. Due to the fact that regulation policy may be
        changed with or without prior notification about changes, all existing
        permissions and admissions of the Company and Tokens Distribution may be
        withdrawn without notice within any jurisdiction. In some legal system
        Tokens from time to time may be considered as virtual products, digital
        assets or even money, and thus may be prohibited to sell, buy, exchange,
        distribute or possess according to local regulations. In its turn, the
        Company also may be considered as regulated or banned product.
    </OpenP>
    <OpenP textAlign='justify'>
        There is no guarantee that the Company is able to support a special legal
        or regulation status within any jurisdiction at any moment.
    </OpenP>
    <OpenP>
        <strong>
            The Company may not successfully develop, market and launch the
            Platform and Investors may not receive Tokens.
        </strong>
    </OpenP>
    <OpenP textAlign='justify'>
        12. The Platform has not yet been developed by the Company and will require
        significant capital funding, expertise of the Company’s management, time
        and effort in order to develop and successfully launch the Platform. The
        Company may have to make changes to the specifications of the Platform or
        Tokens for any number of legitimate reasons or the Company may be unable to
        develop the Platform in a way that realizes those specifications or any
        form of a functioning network. It is possible that the Tokens and the
        Platform may not ever be released and there may never be an operational
        Token or that the Network Launch will not occur.
    </OpenP>
    <OpenP textAlign='justify'>
        The Platform, if successfully developed and maintained, may not meet
        investor expectations at the time of purchase. Furthermore, despite good
        faith efforts to develop and launch the Platform and subsequently to
        develop and maintain the Platform, it is still possible that the Platform
        will experience malfunctions or otherwise fail to be adequately developed
        or maintained, which may negatively impact the Platform and Tokens.
    </OpenP>
    <OpenP textAlign='justify'>
        The Company will use the proceeds of this Offering to make significant
        investments to develop and launch a viable Platform and subsequently to
        build a fulsome network upon which users can realize utility and value. The
        Company may not have or may not be able to obtain the technical skills and
        expertise needed to successfully develop the Platform and progress it to a
        successful Network Launch. While the Company has sought to retain and
        continue to competitively recruit experts, there is a general scarcity of
        management, technical, scientific, research and marketing personnel with
        appropriate training to develop and maintain USG and the Platform. If the
        Company is not successful in its efforts to demonstrate to users the
        utility and value of the Platform, there may not be sufficient demand for
        the Tokens for the Company to proceed with the Network Launch. As a result,
        or if the Network Launch does not occur, Investors may lose all of their
        investment. “Network Launch” means the release of software that provides
        for the exchange of medical services and information using distributed
        ledger technology.
    </OpenP>
    <OpenP>
        <strong>
            Risks Associated with Blockchain Technology and the Ethereum Protocol.
        </strong>
    </OpenP>
    <OpenP textAlign='justify'>
        13. The Platform and the Tokens are based upon blockchain technology and
        the Ethereum protocol. As such, any malfunction, unintended function,
        unexpected functioning of or attack of blockchain technology and/or the
        Ethereum protocol or the Bitcoin protocol may cause the Platform to
        malfunction or function in an unexpected or unintended manner. Ethereum,
        the native unit of account of the Ethereum protocol, may itself lose value
        in ways similar to the Tokens, and in other ways. More information about
    the Ethereum protocol is available at <a href="http://www.ethereum.org/">www.ethereum.org/</a> to assist
        Purchasers in understanding this new technology.
    </OpenP>
    <OpenP textAlign='justify'>
        The growth of the blockchain industry in general, as well as the blockchain
        networks with which the Platform will interact and rely, is subject to a
        high degree of uncertainty. The factors affecting the further development
        of the cryptocurrency industry, as well as blockchain networks, include,
        without limitation:
    </OpenP>
    <OpenUl>
      <OpenLi>
        Worldwide growth in the adoption and use of Bitcoin, and other blockchain technologies;
      </OpenLi>
      <OpenLi>
        Government and quasi-government regulation of Bitcoin, and other
        blockchain assets and their use, or restrictions on or regulation of access
        to and operation of blockchain networks or similar systems;
      </OpenLi>
      <OpenLi>
        The maintenance and development of the open-source software protocol of
        the Bitcoin networks;
      </OpenLi>
      <OpenLi>
        Changes in consumer demographics and public tastes and preferences;
      </OpenLi>
      <OpenLi>
        The availability and popularity of other forms or methods of buying and
        selling goods and services, or trading assets including new means of using
        fiat currencies or existing networks;
      </OpenLi>
      <OpenLi>
        General economic conditions and the regulatory environment relating to
        cryptocurrencies; or
      </OpenLi>
      <OpenLi>
        A decline in the popularity or acceptance of Bitcoin or other
        blockchain-based tokens would adversely affect our results of operations.
      </OpenLi>
    </OpenUl>
    <OpenP textAlign='justify'>
      The slowing or stopping of the development, general acceptance and adoption
      and usage of blockchain networks and blockchain assets may deter or delay
      the acceptance and adoption of the Platform and the Tokens.
    </OpenP>

    <OpenP>
      <strong>
        The prices of blockchain assets are extremely volatile. Fluctuations in
        the price of digital assets could materially and adversely affect our
        business, and the Tokens may also be subject to significant price
        volatility.
      </strong>
    </OpenP>
    <OpenP textAlign='justify'>
        14. The prices of blockchain assets such as Bitcoin have historically been
        subject to dramatic fluctuations and are highly volatile, and the market
        price of the Tokens may also be highly volatile. Several factors may
        influence the market price of the Tokens, including, but not limited to:
    </OpenP>
    <OpenUl>
      <OpenLi>
        Global blockchain asset supply;
      </OpenLi>
      <OpenLi>
        Global blockchain asset demand, which can be influenced by the growth of
        retail merchants’ and commercial businesses’ acceptance of blockchain
        assets like cryptocurrencies as payment for goods and services, the
        security of online blockchain asset exchanges and digital wallets that hold
        blockchain assets, the perception that the use and holding of blockchain
        assets is safe and secure, and the regulatory restrictions on their use;
      </OpenLi>
      <OpenLi>
        Investors’ expectations with respect to the rate of inflation;
      </OpenLi>
      <OpenLi>
        Changes in the software, software requirements or hardware requirements
        underlying the Platform;
      </OpenLi>
      <OpenLi>
        Changes in the rights, obligations, incentives, or rewards for the
        various participants in the Platform;
      </OpenLi>
      <OpenLi>
        Interest rates;
      </OpenLi>
      <OpenLi>
        Currency exchange rates, including the rates at which digital assets may
        be exchanged for fiat currencies;
      </OpenLi>
      <OpenLi>
        Fiat currency withdrawal and deposit policies of blockchain asset
        exchanges on which the Tokens may be traded and liquidity on such
        exchanges;
      </OpenLi>
      <OpenLi>
        Interruptions in service from or failures of major blockchain asset
        exchanges on which the Tokens may be traded;
      </OpenLi>
      <OpenLi>
        Investment and trading activities of large investors, including private
        and registered funds, that may directly or indirectly invest in the
        Platform or Tokens or other blockchain assets;
      </OpenLi>
      <OpenLi>
        Monetary policies of governments, trade restrictions, currency
        devaluations and revaluations;
      </OpenLi>
      <OpenLi>
        Regulatory measures, if any, that affect the use of blockchain assets
        such as the Tokens;
      </OpenLi>
      <OpenLi>
        The maintenance and development of the open-source software protocol of
        the Platform;
      </OpenLi>
      <OpenLi>
        Global or regional political, economic or financial events and
        situations; or
      </OpenLi>
      <OpenLi>
        Expectations among Platform or other blockchain assets participants
        that the value of the Tokens or other blockchain assets will soon change.
      </OpenLi>
    </OpenUl>

    <OpenP textAlign='left'>
      A decrease in the price of a single blockchain assets may cause volatility
      in the entire blockchain asset industry and may affect other blockchain
      assets including the Tokens. For example, a security breach that affects
      investor or user confidence in Bitcoin may affect the industry as a whole
      and may also cause the price of the Tokens and other blockchain assets to
      fluctuate.
    </OpenP>
    <OpenP>
        <strong>
            The regulatory regime governing the blockchain technologies,
            cryptocurrencies, tokens and token offerings such as Platform and the
            Tokens is uncertain, and new regulations or policies may materially
            adversely affect the development of the Platform and the utility of the
            Tokens.
        </strong>
    </OpenP>
    <OpenP textAlign='left'>
        15. Regulation of tokens (including USG) and token offerings such as this,
        cryptocurrencies, blockchain technologies, and cryptocurrency exchanges
        currently is undeveloped and likely to rapidly evolve, varies significantly
        among international, federal, state and local jurisdictions and is subject
        to significant uncertainty. Various legislative and executive bodies in
        Singapore, South Korea, Hong Kong, the European Union, China, Gibraltar,
        Switzerland and the United States and in other countries may in the future,
        adopt laws, regulations, guidance, or other actions, which may severely
        impact the development and growth of the Platform and the adoption and
        utility of the Tokens. Failure by the Company, or certain users of the
        Platform to comply with any laws, rules and regulations, some of which may
        not exist yet or are subject to interpretation and may be subject to
        change, could result in a variety of adverse consequences, including civil
        penalties and fines.
    </OpenP>
    <OpenP textAlign='left'>
        Blockchain networks also face an uncertain regulatory landscape in many
        foreign jurisdictions such as the European Union, China and Russia. Various
        foreign jurisdictions may, in the near future, adopt laws, regulations or
        directives that affect the Platform. The effect of any future regulatory
        change is impossible to predict, but such change could be substantial and
        materially adverse to the development and growth of the Platform and the
        adoption and utility of the Tokens.
    </OpenP>
    <OpenP textAlign='left'>
        New or changing laws and regulations or interpretations of existing laws
        and regulations may materially and adversely impact the value of the
        currency in which the Tokens may be exchanged, the value of the
        distributions that may be made by the Company the liquidity of the Tokens,
        the ability to access marketplaces or exchanges on which to trade the
        Tokens, and the structure, rights and transferability of Tokens.
    </OpenP>
    <OpenP>
        <strong>Risk of Alternative Platforms. </strong>
    </OpenP>
    <OpenP textAlign='left'>
        16. Following the Offering of the Tokens and the development of the initial
        version of the Platform, it is possible that alternative applications could
        be established, which use the same open source code and protocol underlying
        the Platform. Such competitors may have greater resources or experience and
        could potentially negatively impact the Platform, including its value and
        the value of Tokens.
    </OpenP>
    <OpenP>
        <strong>
            The Investors will have no control and the Company may only have
            limited control once the Network Launch occurs.
        </strong>
    </OpenP>
    <OpenP textAlign='left'>
        17. The Company is comprised of open-source technologies that depend on a
        network of computers to run certain software programs to process
        transactions. Because of this less centralized model, the Company has
        limited control over the Token and the Platform once launched. In addition,
        the Investors are not and will not be entitled, to vote or receive
        dividends or be deemed the holder of capital stock of the Company for any
        purpose, nor will anything be construed to confer on the Investors any of
        the rights of a stockholder of the Company or any right to vote for the
        election of directors or upon any matter submitted to stockholders at any
        meeting thereof, or to give or withhold consent to any corporate action or
        to receive notice of meetings, or to receive subscription rights or
        otherwise.<strong></strong>
    </OpenP>
    <OpenP>
        <strong>
            There may be occasions when certain individuals involved in the
            development and launch of the Platform may encounter potential
            conflicts of interest in connection with the Network Launch, such that
            said party may avoid a loss, or even realize a gain, when other
            Investors in the Presale or in the Company are suffering losses.
        </strong>
    </OpenP>
    <OpenP textAlign='left'>
        18. There may be occasions when certain individuals involved in the
        development and launch of the Platform or may encounter potential conflicts
        of interest in connection with this Offering and the Network Launch, such
        that said party may avoid a loss, or even realize a gain, when other
        Investors in the are suffering losses. Investors in Purchase Agreements may
        also have conflicting investment, tax, and other interests with respect to
        Purchase Agreement investments, which may arise from the terms of the
        Purchase Agreement, the USG code, the Platform, the timing of the Network
        Launch or other token pre-sales, or other factors. Decisions made by the
        key employees of the Company on such matters may be more beneficial for
        some Investors than for others.
    </OpenP>
    <OpenP>
        <strong>Risk of Insufficient Interest in the Platform. </strong>
    </OpenP>
    <OpenP textAlign='left'>
        19. It is possible that there will be limited public interest in the
        creation and development of the Platform and the Tokens. Such a lack of
        interest could negatively impact the Tokens and the Tokens.
    </OpenP>
    <OpenP>
        <strong>
            Risk that the Platform, as Developed, Will Not Meet the Expectations of
            Investors
        </strong>
    </OpenP>
    <OpenP textAlign='left'>
        20. The Platform is presently under development and may undergo significant
        changes before release. Any expectations or assumptions regarding the form
        and functionality of the Platform or Tokens (including token behavior) held
        by a Purchaser, may not be met upon release, for any number of reasons,
        including mistaken assumptions or analysis, a change in the design and
        implementation plans, and execution of the Platform.
    </OpenP>
    <OpenP>
        <strong>Risk of Theft and Hacking. </strong>
    </OpenP>
    <OpenP textAlign='left'>
        21. The Platform structural foundation, the open-source protocol, the
        software application and other interfaces or applications built upon the
        Platform are still in an e1rly development stage and are unproven, and
        there can be no assurances that the Platform and the creating, transfer or
        storage of the Tokens will be uninterrupted or fully secure which may
        result in a complete loss of users’ Tokens or an unwillingness of users to
        access, adopt and utilize the Platform. Further, the Platform may also be
        the target of malicious attacks seeking to identify and exploit weaknesses
        in the software or the Platform which may result in the loss or theft of
        Tokens. For example, if the Platform is subject to unknown and known
        security attacks (such as double-spend attacks, 51% attacks, or other
        malicious attacks), this may materially and adversely affect the Platform.
        In any such event, if the Network Launch does not occur or if the Platform
        is not widely adopted, Investors may lose all of their investment.
    </OpenP>
    <OpenP>
        <strong>
            Risk of Security Weaknesses in the Platform Application Core
            Infrastructure Software.
        </strong>
    </OpenP>
    <OpenP textAlign='left'>
        22. The Platform will partly consist of open source software that is based
        on open source software. There are a number of data protection, security,
        privacy and other government- and industry-specific requirements, including
        those that require companies to notify individuals of data security
        incidents involving certain types of personal data. Security compromises
        could harm the the Company’s reputation, erode user confidence in the
        effectiveness of its security measures, negatively impact its ability to
        attract new users, or cause existing users to stop using the Platform.
    </OpenP>
    <OpenP>
        <strong>
            Risk of Weaknesses or Exploitable Breakthroughs in the Field of
            Cryptography.
        </strong>
    </OpenP>
    <OpenP textAlign='left'>
        23. Advances in cryptography, or technical advances such as the development
        of quantum computers, could present risks to the Platform, the Tokens and
        the Tokens, such as theft or loss.
    </OpenP>
    <OpenP>
        <strong>Risk of Lack of Adoption or Use of the Platform. </strong>
    </OpenP>
    <OpenP textAlign='left'>
        25. While the Platform and Tokens should not be viewed as an investment,
        each may have value over time. That value may be limited if the Platform
        lacks use and adoption. If this becomes the case, there may be few or no
        markets following the launch of the application, potentially having an
        adverse impact on the Platform.
    </OpenP>
    <OpenP>
        <strong>Risk of Dissolution of the Company. </strong>
    </OpenP>
    <OpenP textAlign='left'>
        26. It is possible that, due to any number of reasons, including an
        unfavorable fluctuation in the value of Ethereum, development issues with
        the Platform, the failure of business relationships, or competing
        intellectual property claims, the Company may no longer be viable as a
        business or otherwise and may dissolve or fail to launch.
    </OpenP>
    <OpenP>
        <strong>Unanticipated Risks. </strong>
    </OpenP>
    <OpenP textAlign='left'>
        27. Cryptographic tokens are a new and untested technology. In addition to the risks discussed, there are risks that the Company team cannot anticipate. Further risks may materialize as unanticipated combinations or variations of the discussed risks or the emergence of new risks.
    </OpenP>
  </div>
);

class TokenPurchaseAgreement extends Component {
  render() {
    return (
      <Container fluid id={0}>

        <HeroHeader bgImage={TopBg}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH1>
                  US Gold Currency
                </HhH1>
                <HhH2>
                  Token Purchase Agreement
                </HhH2>
              </HhTextContainer>
              <Fade>
                <HhImageContainer bgImage={USGoldToken} />
              </Fade>
            </HhInnerContainer>
          </Container>
        </HeroHeader>

        <FullWidthDiv topColor='#f9f9f9' bottomColor='#f9f9f9'>
          <Container>
            <OpenH4>
              This USG Token Purchase Agreement (this “<u>Agreement</u>”) contains the terms and conditions that govern your use of the USG distribution smart contract (the “<u>USG Distribution Contract</u>”); use of the related
              ERC-20 USG token smart contact (the “USG Token Contract”); and purchase of the ERC-20 compatible tokens distributed on the Ethereum blockchain (the “    <u>USG Tokens</u>”) and is an agreement between you or the entity that you represent (“<u>Buyer</u>” or “<u>you</u>”) and US Gold Currency LLC, a Wyoming limited liaiblity company (together with its affiliates, “    <u>Company</u>”). Buyer and Company are herein referred to individually as a “<u>Party</u>” and collectively, as the “<u>Parties</u>”.
            </OpenH4>
            <OpenP textAlign='center'>
              NOW, THEREFORE, in consideration of the mutual representations, warranties and agreements contained in this Agreement, and for other good and valuable
              consideration, the receipt and sufficiency of which are hereby acknowledged, Company and Buyer agree as follows:
            </OpenP>
          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#fff' bottomColor='#fff'>
          <Container>
            <Content />
          </Container>
        </FullWidthDiv>

        <Footer />
      </Container>
    );
  }
}

const styles = {
  image50tall: {
    width: 'auto',
    height: '50px',
  },
  noPadOrMargin: {
    padding: 0,
    margin: 0,
  },
  goldBorder: {
    border: '1px',
    borderStyle: 'solid',
    borderColor: '#f8da1d',
  },
  pushedDown: {
    position: 'relative',
    top: '350px',
    // marginTop: '400px',
  },
  padTop: {
    paddingTop: '30px',
  },
  fullWidth: {
    width: '100%',
  },
}

export default TokenPurchaseAgreement;
