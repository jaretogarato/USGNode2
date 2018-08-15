import React, { Component } from 'react';
import { Container, Grid, Segment, Image } from 'semantic-ui-react';
import axios from 'axios';
import { USGInUSD } from './partials/USGInUSD';

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
import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2,
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  OpenUl, OpenLi, OpenH5,
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
    AccordionContainer,
} from 'react-accessible-accordion';


const Content = () => (
  <Accordion>
    <AccordionItem uuid='Base1' key='Base1'>
      <AccordionItemTitle>
        1. BUYING FROM US GOLD
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign='left'>
          All sales are subject to the terms of the Purchase Agreement found <a href="/token-purchase-agreement">here</a>. User agrees to the terms of the Purchase Agreement in connection with the purchase of the USG Tokens.
        </OpenP>
        <Accordion>
          <AccordionItem uuid='1A' key='1A'>
            <AccordionItemTitle>
              A. MINIMUM SALES ORDERS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                There is currently a minimum Sales Order for the USG Token – regardless of the payment method, (BTC / ETH / USD) is one (1) and our current minimum amount for a Sales Order is ${USGInUSD.toFixed(2)} (USD) per transaction – subject to updated pricing appearing upon the website of the <a href="https://catalog.usmint.gov/american-eagle-2018-one-ounce-gold-proof-coin-18EB.html?cgid=gold-coins#start=1/" target="_blank" rel="noopener noreferrer">United States Mint</a>.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem uuid='1B' key='1B'>
            <AccordionItemTitle>
              B. SALES ORDER PRICE CONFIRMATIONS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                When buying USG online from us, the price at which your USG Token Sales Order is submitted is the locked-in price. There are no added charges or commissions, and no additional shipping as your USG Token(s) will be sent electronically to your approved wallet address.
              </OpenP>
              <OpenP textAlign='left'>
                Upon a future Redemption Order – the only charges USGC adds are for shipping, handling and insurance upon any redemption of a USG Token for the physical 1oz Gold American Eagle coin(s). A confirmation number for any transaction will be provided to your confirmed email address appearing within your online customer account.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem uuid='1C' key='1C'>
            <AccordionItemTitle>
              C. CANCELLATIONS OF SALES ORDERS WITH USGC
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                You have no right to cancel your USG Token Sales Order(s). However, if you default in your performance of payment, shipment or any other act required, we may cancel your Sales Order(s). We reserve the right to cancel any Sales Order at any time and for any reason.
              </OpenP>
              <OpenP textAlign='left'>
                Any USG Token Sales Order cancellations vests in and shall remain the property of USGC. At any time USGC may elect to charge a $250.00 cancellation fee and upon receipt of such cancellation payment, we will forgive further action against you and your responsibility for any breach by you and all resulting damages owed to USGC.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem uuid='1D' key='1D'>
            <AccordionItemTitle>
              D. SALES ORDER CHANGES
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Because a USG Token Sales Order may not be changed, we suggest you take the time up front to make sure what you want is exactly what you request from us as reflected in your Sales Order.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem uuid='1E' key='1E'>
            <AccordionItemTitle>
              E. SALES ORDER PAYMENT REQUIREMENTS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                When you buy from us, you must ensure that your payment is received by USGC. If you default and payment is not timely received by USGC, USGC reserves the right in its sole discretion to (a) accept your payment; (b) refuse your payment and cancel your USG Token Sales Order; (c) close your account; and/or (d) preclude you from placing any future USG Token Sales Orders from USGC.
              </OpenP>
              <OpenP textAlign='left'>
                It is always best to send us your payment immediately to complete your transaction with USGC and avoid any possible default so you can realize the locked-in price as of your confirmation time. When making payment by Bank Wire Transfer, we recommend making payment the same day your USG Token Sales Order is placed.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </AccordionItemBody>
    </AccordionItem>

    <AccordionItem uuid='Base2' key='Base2'>
      <AccordionItemTitle>
        2. SENDING YOUR PAYMENT
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign='left'>
          Payment instructions will be issued online on the final page of the online Sales Order process and again by email after you place your USG Token Sales Order. Payment must be dated within 24 hours of your Sales Order date. If you default and you do not meet these requirements, USGC reserves the right to cancel your USG Token Sales Order. We reserve the right to refuse or cancel any USG Token Sales Order at any time, including if it is deemed questionable or of significant risk to USGC regardless of payment method and price confirmation and in such case, you waive any right to any claim or actual damages of any kind or nature whatsoever.
        </OpenP>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              A. PAYMENT OPTIONS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Depending upon the Sales Order amount, you may pay by some or all of the following payment methods: Bitcoin, Ethereum, and Bank Wire Transfer in USD. In some special circumstances, you may qualify to pay using your PayPal account, in the event you are permitted to use PayPal your USG Token Sales Order must be paid using a VISA Debit card only and the transaction may require additional information including and not limited to CVV code, Zip code associated with the address for the VISA Debit card bank account and the PIN associated with the VISA Debit card bank account.
              </OpenP>
              <OpenP textAlign='left'>
                USG Token Sales Orders using a VISA Debit card for any amount(s) are reviewed on an order-by-order basis. In the sole discretion of USGC, your USG Token Sale Order – Debit card transaction, may be subject to additional documentation or screening and are subject to our pre-approval. USGC has the right to refuse any Debit Card payment at its sole discretion.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              B. WIRING FUNDS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Once you have placed a Sales Order and we have issued a confirmation number, we will provide you wire instructions, including our bank name, ABA routing number and account number.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              C. GOOD FUNDS POLICY
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Good funds is the day we receive your direct bank wire. Additional delays may occur if your bank does not cooperate in assisting us with the information needed to verify your transaction.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              D. CREDIT CARDS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                We may accept, but are not obligated to accept, credit card payments for Sales Order(s).
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              E. ACH OR ONLINE PAYMENTS FOR SALES ORDERS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                We do not accept ACH transactions for Sales Orders.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              F. CURRENCIES
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                We currently accept payments for Sales Orders in Bitcoin (BTC), in Ethereum (ETH) and in U.S. dollars (USD).
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        3. SHIPPING YOUR GOLD AMERICAN EAGLE COINS
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign='left'>
          Upon exchange of a USG for a 1oz Gold American Eagle Coin (AE Coin), such Gold American Eagle Coin(s) shall be shipped by us by UPS Parcel Pro, or another common carrier. Each package is fully insured. Packages sent registered and insured mail can take on average 5-10 Business Days to receive.
        </OpenP>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              A. ESTIMATED U.S. SHIPPING, HANDLING AND INSURANCE CHARGES
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                1. One (1) 1oz Gold American Eagle Coin <br />
                2. $24.85 (USD) (ETH) inside the USA <br />
                3. Insured Shipping through UPS Parcel Pro – Adult Signature is required.
              </OpenP>
              <OpenP textAlign='left'>
                USGC insures all of its coin shipments to you for the value of the enclosed 1oz Gold American Eagle coin(s) redeemed from USGC, subject to the following limitations. We must be notified of a lost package within thirty (30) days from the ship date of your redemption order. Should anything happen while your package is in transit to you, you might be permitted to claim coverage under our insurance policy provided that you directly receive the package from UPS Parcel Pro or another common carrier. Neither we, nor our insurance company, accepts (and we specifically disclaim) responsibility if you have left instructions with any carrier or delivery service to leave parcels for you without the need for your signature. Nor do we, nor our insurance company, accept (and we specifically disclaim) responsibility if you have given any carrier or delivery service instructions to leave your package with someone else, such as a building manager, neighbor, or a drop-off location such as Mail Boxes Etc., The UPS Store, or similar third party drop off locations. In any such case, your package will not be covered for insurance by USGC or our insurance carrier. If you do not receive the package directly from the common carrier, you agree to take all reasonable actions to assist in recovery of the package, including but not limited to filling-out reports (and/or police reports) and providing all information needed or that may be requested to assist in recovery of the package. If you do not fully cooperate in recovery efforts, neither USGC, nor our insurance company or carrier, will have any liability to you.
              </OpenP>
              <OpenP textAlign='left'>
                When we ship to you, if the AE Coins are lost or damaged in transit, it is our responsibility to pursue any claim with the insurance company. If we determine the package is lost or damaged, we will file a claim. Once the claim is filed, we reserve the right to re-ship your items or send the equivalent value in USD at our discretion, and USGC shall have no further responsibility or liability to you. If there is any disruption in the delivery of a package to you, you agree to cooperate with us in any investigation or claim process and to take every reasonable action requested of you in the process. Failure to fully cooperate will jeopardize coverage that may be provided to you.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        4. INTERNATIONAL ORDERS
      </AccordionItemTitle>
      <AccordionItemBody>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              A. DUTIES AND TAXES
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                All duties and taxes must be paid by the customer on Sales Order(s) delivery. You may be subject to taxes and/or duties for your Sales Order from USGC. Please consult your local customs broker for more information on duty and tax rates.
              </OpenP>
              <OpenP textAlign='left'>
                All shipping amounts listed below are approximations. Please call us for the most current shipping charges.
              </OpenP>
              <OpenP textAlign='left'>
                Your Sales Orders are shipped by us, at our discretion, by UPS Parcel Pro, or another common carrier. Each package is fully insured. Packages sent registered and insured mail can take on average 5-10 Business Days to receive.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              B. ESTIMATED U.S. SHIPPING, HANDLING AND INSURANCE CHARGES
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                1. One (1) 1oz Gold American Eagle Coin <br />
                2. $48.85 (USD) (ETH) outside the USA – plus any Duty charges with Customs <br />
                3. Insured Shipping through UPS Parcel Pro – Adult Signature is required. <br />
              </OpenP>
              <OpenP textAlign='left'>
                USGC always declares the full value of the shipment on any customs form. There are no exceptions to this rule.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              C. INTERNATIONAL DELIVERY REQUIREMENTS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                If your Sales Order is returned to USGC due to your refusal to pay duties or taxes, or if the carrier (for example, UPS or Federal Express) was unable to deliver your Sales Order, you agree you are responsible for any return shipping fees, additional duties, or applicable taxes for returning the package back to USGC. In addition, if your package is returned to USGC, we will not reship your Sales Order unless and until we are paid in full for any return shipping costs, duties, taxes we have had to pay or advance for you as well as any subsequent re-ship fees back to you.
              </OpenP>
              <OpenP textAlign='left'>
                International returns on Sales Orders are very costly and we strongly suggest making yourself aware of any duties or taxes before packages are shipped to avoid surprises. In addition, we strongly suggest making yourself available to the delivery company so your package is not returned to USGC, subjecting you to unnecessary taxes, duties, shipping costs or delays. Delays for Sales Order re-ships could take 6-8 weeks or longer to complete when packages are not received as they should be. If you have any questions about your international shipment, please send an inquiry to <a href='mailto:support@usgold.io'>support@usgold.io</a>.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        5. RETURN POLICY
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign='left'>
          {/* We want our customers to be satisfied with their sales at USGC. At your request, we may, but are not obligated to, provide you with an opportunity to exchange a Product for an identical Product in the event of a material defect. If we agree to do so, such exchange must be made within seven (7) days from the date on which the customer receives his or her Product(s) and only to those customers who timely and properly notify our Customer Service Department by telephone at (800) 673-5800, and who receive written confirmation that the exchange request has been approved. If approved, the Customer Service Department will give you instructions on how to exchange your items. */}
          Once received, the AE Coins are non-returnable.

        </OpenP>
        <OpenP textAlign='left'>
          <strong>Shipping and handling charges are non-refundable.</strong> For approved exchanges, you must follow all instructions provided by Customer Service, including carefully packaging the Product. You are responsible for the cost of return shipping and the risk of loss during the return shipment as part of the exchange. USGC reserves the right, at its sole discretion, to reject any exchange that does not comply with these requirements. If an exchange is requested, we reserve the right to accept or refuse the exchange request in our sole discretion, any Market Gain on refunds shall vest in and remain the property of USGC.
        </OpenP>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        6. RISKS
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign='left'>
          All investments involve risk; Coins and Bullion are no exception. The value of a Bullion Coin (e.g., American Eagles) is affected by many economic factors, including the current market price of Bullion the perceived scarcity of the Coins and other factors. Some of these factors include the quality and current demand and general market sentiment.
        </OpenP>
        <OpenP textAlign='left'>
          Therefore, because both Bullion and Coins can go down in price as well as up, investing in them may not be suitable for everyone. Because all investments, including Bullion and Coins, can decline in value, you should understand them well, and have adequate cash reserves and disposable income before considering a Bullion or Coin investment. Please consult your financial advisor.
        </OpenP>
        <OpenP textAlign='left'>
          USGC does guarantee that every item that we sell is genuine and that all items do contain the weight, fineness, and purity as advertised. However, all investments, of every type, involve some level of risk and Precious Metals are no exception. Like many markets, the Precious Metals market is speculative, and it is unregulated. The value of any Bullion item is generally determined by current spot price of the underlying Precious Metal, and by the supply and demand for these particular items. These prices will fluctuate throughout the day while the Precious Metals market is open. If you are considering purchasing Precious Metals as an investment, you should assess the stability of the current market and contact your financial advisor.
        </OpenP>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        7. BINDING CONTRACT
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign='left'>
          Once you have placed a Sale Order – to buy from USGC, or placed a Redemption Order – to redeem physical gold bullion coin(s) from USGC, you have entered into a binding contract.
        </OpenP>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        8. GENERAL PROVISIONS
      </AccordionItemTitle>
      <AccordionItemBody>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              A. ABSENCE OF RELATIONSHIP
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The sole relationship between USGC and you is that of seller to a buyer respectively. No other relationship, including, without limitation, any agent-principal relationship, any employee-employer relationship, any franchisee-franchisor relationship, any joint venture relationship or any partnership relationship, between USGC and you exists.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              B. ADDITIONAL ITEMS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Additional terms relating to certain Products (such as prices, methods of payment, our policies with respect to returns, refunds, and cancellations and/or exchanges) may be posted on the site on the pages describing the Products.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              C. ASSIGNMENT
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                You may not assign any of your rights or obligations under this User Agreement without the prior written consent of USGC, which may be granted or withheld by USGC in its sole discretion. This contract, including but not limited to the User Agreement, shall be binding on all permitted assigns and successors of USGC and you.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              D. CONFIDENTIALITY
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Discretion should be exercised when disclosing the existence and terms of all your transactions with USGC and should carefully consider any disclosure of such information that you make to third parties.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              E. DISPUTE RESOLUTION
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                It is USGC’s goal to amicably resolve any disagreement or dispute expeditiously. We encourage you to contact Customer Service at (800) 673-5800 or a business-consumer intermediary (such as a local better business bureau). If an amicable resolution cannot be reached between us, such disagreement or dispute shall be resolved in accordance with the following paragraphs:
              </OpenP>
              <OpenP textAlign='left'>
                <strong>1. The parties agree to the terms regarding Dispute Resolution set forth in Article 9.</strong>
              </OpenP>
              {/* <OpenP textAlign='left'>
                <strong>1. Forum Selection and Governing Law.</strong><br />
                The federal and state courts located in Laramie County, Wyoming, shall have exclusive jurisdiction of all actions arising out of or relating to the transactions between you and USGC, including but not limited to the User Agreement. All such disagreements and disputes shall be resolved exclusively in such federal and state courts, as appropriate, in that jurisdiction. You hereby consent to personal jurisdiction and venue in those federal and state courts for the purpose of resolving any disagreements or disputes between us and waive all objections to the jurisdiction of such federal and state courts. Any action arising out of or relating to the User Agreement shall be governed by, and interpreted in accordance with, the laws of the State of Wyoming, without regard to conflict of laws principles.
              </OpenP>
              <OpenP textAlign='left'>
                <strong>2. Waiver of Jury Trial; Arbitration.</strong><br />
                Both USGC and you hereby waive the right to a trial by jury in connection with any dispute arising out of or relating to the User Agreement and the transactions between them.
              </OpenP> */}
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              F. FORCE MAJEURE
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                If USGC cannot perform any obligation hereunder as a result of any event that is beyond its control, USGC’s delay or failure to perform such obligation shall be excused and USGC shall not be liable for any damages as a result of, or in connection with, such delay or such failure.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              G. FURTHER ASSURANCES
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                You shall execute and deliver such other documents and take such other actions as may be reasonably requested by USGC to carry out your obligations under the User Agreement.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              H. NOTICES
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Except as otherwise provided herein, all notices and other communications to USGC shall be directed to USGC, c/o Chief Legal Counsel,1603 Capitol Ave., Suite 303, Cheyenne, WY 82001 USA, and all other notices and other communications to you shall be directed, at the option of USGC, to the address that you provided to USGC at the time of your registration.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              I. RECORDING OF PHONE CONVERSATIONS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                USGC may record phone conversations between us, and you expressly consent to the recording of such phone conversations.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              J. ABSENCE OF WAIVERS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                A decision or a failure by USGC to take action with respect to any non-compliance by you of your obligations to USGC or to insist upon strict adherence to any term in the User Agreement, does not affect the ability of USGC with respect to any other non-compliance by you, and does not waive or limit USGC’s right thereafter to insist upon strict adherence to that or any other term, whether of a similar or dissimilar nature.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              K. PRICING OR TYPOGRAPHICAL ERRORS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                We work hard to provide accurate Product and pricing information to you. However, pricing or typographical errors may occur. In the event that an item is listed at an incorrect list price or with incorrect information due to an error in pricing or Product information, USGC shall have the right, at our sole discretion, to refuse or cancel any Sales Orders or Redemption Orders placed by or sent to you for that item. We will either contact you for instructions or cancel your Sales Order or Redemption Order and notify you of such cancellation. Prices and availability are subject to change without notice. If a refund is provided or there is any delay in sending you your Products or your payment, as the case may be, you waive any right to any claim or actual damages of any kind or nature whatsoever.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              L. SECURITY
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                USGC takes security very seriously. Our security measures protect the loss, misuse and alteration of all information under our control. Our system is based on the SSL (Secure Socket Layer) encryption standard. Provided you are using an SSL-compliant browser such as Microsoft Internet Explorer, Google Chrome, Mozilla Firefox or Apple Safari, you'll be able to conduct fully-protected transactions that encrypt all of your personal information, including Visa debit card number, name and address, so it cannot be read as the information travels from you to USGC. Furthermore all of the customer data we collect is protected against unauthorized access. See our Privacy Policy for additional information.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              M. SECTION HEADINGS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The section headings are included for ease of reference and do not affect the interpretation or the scope of the User Agreement.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              N. SEVERABILITY
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The User Agreement is intended to be enforceable to the fullest extent permitted by applicable law. If any term of the User Agreement is held to be unenforceable for any reason, such unenforceability shall not affect the other terms of the User Agreement, and the term that would otherwise be unenforceable shall be enforced to the fullest extent.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              O. AMENDMENT
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                USGC may amend the User Agreement at any time by posting the amended terms on the Website and such amendments shall become effective immediately.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              P. ENTIRE AGREEMENT
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The User Agreement, the Privacy Policy and confirmations of the Sale or Redemption transactions hereunder set forth the entire understanding between USGC and you with respect to the subject matter of our transactions.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              Q. USER CONTENT AND CONDUCT
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                At times, if and where applicable at the Website, you may be invited to post User Content. You understand that all User Content, whether you have publicly posted on a forum or privately transmitted to another or to us, is your sole responsibility. Though the Website is designed to be a safe place to share such User Content, USGC cannot guaranty that other users will not misuse the User Content that you share. If you have any User Content that you would like to keep confidential or do not want others to use, do not post it to the Website. Under no circumstances will USGC be liable in any way for any User Content, including, but not limited to, any errors or omissions in any User Content, or for any loss or damage of any kind incurred as a result of the use of any User Content posted, emailed or otherwise transmitted via the Website. The USGC entities are not responsible for a user’s misuse or misappropriation of any User Content you posted at the Website.
              </OpenP>
              <OpenP textAlign='left'>
                By posting any User Content at the Website, you hereby grant USGC and its designees a royalty-free, fully paid-up, perpetual, irrevocable, non-exclusive and fully sub-licensable right and license to use, reproduce, modify, adapt, publish, translate, combine with other works, create derivative works from, distribute, perform, edit and display such User Content (in whole or part), throughout the world in any form, media, or technology now known or later developed. You specifically waive any “moral rights” in and to the User Content. The foregoing grant includes, without limitation, any copyrights and other intellectual property rights in and to your User Content. You represent and warrant that: (a) you own the User Content posted by you or otherwise have the right to grant the license set forth in this section; and (b) the posting of your User Content at the Website does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person. You agree to pay for all royalties, fees, and any other monies owing any person by reason of any User Content you post at the Website.
              </OpenP>
              <OpenP textAlign='left'>
                You acknowledge and agree that USGC may preserve User Content and may also disclose User Content if required to do so by law or in the good faith belief that such preservation or disclosure is reasonably necessary to: (a) comply with legal process; (b) enforce this Agreement; (c) respond to claim(s) or assertion(s) that any User Content violates the rights of third-parties; or (d) protect the rights, property, or personal safety of USGC, its users and the public. You understand that the technical processing and transmission of the Website, including your User Content, may involve transmissions over various networks and changes to conform and adapt to technical requirements of connecting networks or devices.
              </OpenP>
              <OpenP textAlign='left'>
                You agree to each of the conditions in this Agreement and further agree that each of these conditions applies forever and broadly with regard to USGC worldwide. Posting of User Content to or through the Website, including ideas or disclosures of opinions, is voluntary on your part. No confidential or contractual relationship is established by your posting of User Content or is to be implied by our review or subsequent use of your User Content. USGC shall not be liable for any disclosure of any User Content, including opinion(s) or suggestion(s), you post to or through the Website. USGC shall be entitled to unrestricted use of any User Content it may receive from you at the Website, for any purpose whatsoever, commercial or otherwise, without compensation to you as the provider of the User Content.
              </OpenP>
              <OpenP textAlign='left'>
                You agree that you will not use the Website to:
              </OpenP>
              <OpenUl>
                <OpenLi>	upload, post, email or otherwise transmit any User Content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable;</OpenLi>
                <OpenLi>	harm minors in any way;</OpenLi>
                <OpenLi>	impersonate any person or entity, including, but not limited to a representative of USGC, or falsely state or otherwise misrepresent your affiliation with a person or entity;</OpenLi>
                <OpenLi>	forge headers or otherwise manipulate identifiers in order to disguise the origin of any User Content transmitted through the Website;</OpenLi>
                <OpenLi>	upload, post, email or otherwise transmit any User Content that you do not have a right to transmit under any law or under contractual or fiduciary relationships (such as inside information, proprietary and confidential information learned or disclosed as part of employment relationships or under nondisclosure agreements);</OpenLi>
                <OpenLi>	upload, post, email or otherwise transmit any User Content that infringes any patent, trademark, trade secret, copyright or other proprietary rights of any party;</OpenLi>
                <OpenLi>	upload, post, email or otherwise transmit any unsolicited or unauthorized advertising, promotional materials, "junk mail," "spam," "chain letters," "pyramid schemes," or any other form of solicitation, except in those areas that are designated for such purpose;</OpenLi>
                <OpenLi>	upload, post, email or otherwise transmit any material that contains software viruses or any other computer code, files or programs designed to interrupt, emulate, destroy or limit the functionality of any computer software or hardware or telecommunications equipment;</OpenLi>
                <OpenLi>	disrupt the normal flow of dialogue, cause a screen to "scroll" faster than other users of the Website are able to type, or otherwise act in a manner that negatively affects other users' ability to engage in real-time exchanges;</OpenLi>
                <OpenLi>	interfere with or disrupt the Website or servers or networks connected to the Website, or disobey any requirements, procedures, policies or regulations of networks connected to the Website;</OpenLi>
                <OpenLi>	"stalk" or otherwise harass another; or</OpenLi>
                <OpenLi>	collect or store personal data about other Website users.</OpenLi>
              </OpenUl>
              <OpenP textAlign='left'>
                You understand that by using the Website, you may be exposed to User Content created by others that is offensive, indecent or objectionable. USGC does not endorse or have control over User Content. User Content is not reviewed by USGC prior to posting and does not reflect the opinions or policies of USGC. USGC makes no representations or warranties, express or implied as to User Content or the accuracy and reliability of User Content or any other material or information that you may access through the Website. USGC assumes no responsibility for monitoring the Website for inappropriate submissions or conduct. If at any time USGC chooses, in its sole discretion, to monitor the Website, USGC nonetheless assumes no responsibility for User Content, has no obligation to modify or remove any inappropriate User Content, and has no responsibility for the conduct of the Website users submitting any such User Content. Notwithstanding the foregoing, USGC and its designees shall have the right to remove any User Content that violates this Agreement or is otherwise objectionable, in USGC’s sole discretion. You agree that you must evaluate, and bear all risks associated with, the use of any User Content, including any reliance on the accuracy, completeness, or usefulness of such User Content. In this regard, you acknowledge that you may not rely on any User Content.
              </OpenP>
              <OpenP textAlign='left'>
                You are solely responsible for your interactions with other Website users. USGC reserves the right, but has no obligation, to monitor disputes between you and other Website users and to terminate your Website access if USGC determines, in its sole discretion, that doing so is prudent.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        9. TERMS OF USE
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign='left'>
          This website is owned and operated by USGC. Access and use of this website is provided by USGC to you on condition that you accept these Terms of Use, and by accessing or using this website, you agree to these Terms of Use. If you do not agree to accept and abide by these Terms of Use you should not access or use this website.
        </OpenP>
        <OpenP textAlign='left'>
          USGC may revise and update these Terms of Use at any time and without notice. You are cautioned to review the Terms of Use posted on the website periodically. Your continued access or use of this website after any such changes are posted will constitute your acceptance of these changes.
        </OpenP>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              A. USE OF THE SITE
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                This website and its contents, including photography and other USGC-owned assets, (the “Content”) are intended for customers of USGC. You may not use this website or the Content for any purpose not related to your business with USGC. You are specifically prohibited from: (a) downloading, copying, or re-transmitting any or all of the website or the Content without, or in violation of, a written license or agreement with USGC; (b) using any data mining, robots or similar data gathering or extraction methods; (c) manipulating or otherwise displaying the website or the Content by using framing or similar navigational technology; (d) registering, subscribing, unsubscribing, or attempting to register, subscribe, or unsubscribe any party for any USGC product or service if you are not expressly authorized by such party to do so; and (e) using the website or the Content other than for its intended purpose, as determined solely in USGC’s discretion, including but not limited to, to defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy) of others, and/or to publish, post, distribute or disseminate any defamatory, infringing, obscene, pornographic, sexual, indecent or unlawful material or information.
              </OpenP>
              <OpenP textAlign='left'>
                You may not interfere with the security of, or otherwise abuse this website or any system resources, services or networks connected to or accessible through this website. You may only use this website for lawful purposes.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              B. INTELLECTUAL PROPERTY
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                All materials, including the organization and presentation of such material, on this website, including wholly owned brand assets such as photography (the “Materials”) are the property of USGC and its licensors and may be protected by intellectual property laws including laws relating to copyrights, trademarks, trade names, internet domain names and other similar rights.
              </OpenP>
              <OpenP textAlign='left'>
                Unless you have entered into a separate agreement with USGC, any other use of these Materials without USGC's written permission is prohibited. Action taken as a result of use of Materials without express written permission from USGC is at the discretion of USGC and our legal team.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              C. TRADEMARKS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                USGC, USG and any other product or service name or slogan contained in the Site are trademarks of USGC and its licensors and may not be copied, imitated or used, in whole or in part, without the prior written permission of USGC or the applicable trademark holder. You may not use any “hidden text” utilizing “USGC” or any other name, trademark or product or service name of USGC without our prior written permission. In addition, the look and feel of the Site, including all page headers, custom graphics, button icons and scripts, is the service mark, trademark and/or trade dress of USGC and may not be copied, imitated or used, in whole or in part, without our prior written permission. All other trademarks, registered trademarks, product names and company names or logos mentioned in the Site are the property of their respective owners. Reference to any products, services, processes or other information, by trade name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship or recommendation thereof by us.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        10. DEFINITIONS
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign='left'>
          The following terms have the following meanings in the User Agreement:
        </OpenP>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              A. USGC
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term "USGC" means US Gold Currency LLC, a Wyoming limited liability company.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              B. BULLION
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term “Bullion” means the term that is used to describe Gold American Eagle coin(s).
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              C. BUSINESS DAY(S)
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term "Business Day(s)" means a day other than a Saturday, a Sunday or a day that is a holiday under the federal law of the United States of America and/or the laws of the State of Wyoming.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              D. COIN(S)
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term “Coin(s)” means a stamped piece of metal of a known weight and fineness issued by a sovereign government.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              E. TOKEN
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                A The term “Token(s)” means a cryptographic currency token – a direct representation of 1oz Gold American Eagle coin(s) (Gold Coin Backed) token(s) issued by US Gold Currency LLC.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              F. FAIR MARKET VALUE
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term “Fair Market Value” means the Fair Market Value of the Product as determined by USGC, in its reasonable discretion, as of 5 p.m. (MT) on the date of cancellation of the Sales Order or the Purchase Order.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              G. MARKET GAIN
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term “Market Gain” means:<br />
                When a Sales Order or Sale, as the case may be, is cancelled by USGC, Market Gain occurs when the Fair Market Value of the Product(s) on the date of the cancelled Sales Order or Sale is greater than the original sales price of the Product(s) as it appears on the cancelled Sales Order.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              H. MARKET LOSS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term “Market Loss” means:<br />
                When a Sales Order or Sale, as the case may be, is cancelled by USGC, Market Loss occurs when the Fair Market Value of the Product(s) on the date of the cancelled Sales Order or Sale is less than the original sales price of the Product(s) as it appears on the cancelled Sales Order.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              I. ORDER(S)
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term “Order(s)” means, as applicable, a confirmed Sale by a customer or Redemption by USGC, whether such Order was made through the Website, by telephone, in person or otherwise.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              J. PRECIOUS METAL(S)
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term “Precious Metal(s)” means Gold, Silver and Platinum along with the Platinum group of elements: rhodium, osmium, ruthenium, Palladium and iridium. Precious Metals are characteristically lustrous, ductile, rare and nonreactive.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              K. PRODUCT(S)
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term "Product(s)” means a Product that is the subject of an Order. A Product may include, without limitation, cryptocurrency – USG Token, 1oz Gold American Eagle coin(s).
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              L. PURCHASE(S)
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term "Purchase(s)” means the acquisition of Product(s) by USGC from a customer, whether made through the Website, by telephone, in person or otherwise, with the number, quality and price confirmed. A Purchase is distinct from the acquisition by a customer from USGC of a Product, which is treated as a Sale hereunder.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              M. REDEMPTION ORDER(S)
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term “Redemption Order(s)” means an Order placed by USGC with a customer for the fulfillment by USGC of Product(s) to the customer.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              N. SALE(S)
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term "Sale(s)” means the acquisition of Product(s) by a customer from USGC, whether made through the Website, by telephone, in person, or otherwise, with the number, quality and price confirmed. A Sale is distinct from the Redemption by a customer of a USGC Product, which is treated as Redemption hereunder.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              O. SALE ORDER(S)
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term “Sale Order(s)” means an Order placed by a customer with USGC for the acquisition by the customer of Product(s) from USGC.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              P. USER CONTENT
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term “User Content” means content posted by you on the Website, including without limitation any images or testimonials.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              Q. WEBSITE
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term "Website” means the websites located at https://USGold.io and mobile. USGold.io
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </AccordionItemBody>
    </AccordionItem>
  </Accordion>
);


class UserAgreement extends Component {
  // USGInUSD in state is master value for component - don't let the app modify it
  // state = { USGInUSD: 1627.50, ethereumPrice: 0.0, ethereum24hrChange: 0.0, USGInEthereum: 0.0 };

  render() {
    return (
      <Container fluid id={0}>
        <HeroHeader bgImage={TopBg}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH1>
                  User
                </HhH1>
                <HhH2>
                  Agreement
                </HhH2>
              </HhTextContainer>
              <Fade>
                <HhImageContainer bgImage={USGoldToken} />
              </Fade>
            </HhInnerContainer>
          </Container>
        </HeroHeader>

        <FullWidthDiv topColor='#f9f9f9' bottomColor='#f9f9f9' id={1}>
          <Container>
            <OpenH5>
              Last Updated on June 30, 2018. This User Agreement is effective June 30, 2018 for all users
            </OpenH5>
            <OpenP>
              By using the US Gold Currency LLC (“USGC”) website – <strong>www.USGold.io</strong> (“Website”), and other services provided by USGC, including purchasing US Gold Currency LLC Cryptocurrency Token(s) (“USG”) from USGC, you are agreeing to the following terms, including, without limitation, the Terms of Use in the User Agreement. These terms apply to all purchases whether made through the Website, by telephone or otherwise.
            </OpenP>
            <OpenP>
              This User Agreement governs your Purchase and Redemption transactions, including placement of Cryptocurrency Orders from USGC, and Cryptocurrency Redemption from USGC as applicable, and are incorporated by reference into and made part of the USGC Website.
            </OpenP>
          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#fff' bottomColor='#eee'>
          <Container>
            {/* <AccordionExampleNested /> */}
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

export default UserAgreement;
