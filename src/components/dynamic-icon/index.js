import React from "react";
// import PropTypes from "prop-types";
// import EditSvg from "img/icons/edit.svg";
// import WorldSvg from "img/icons/world.svg";
import RightArrowSVG from '../../icons/right-arrow.svg';
import LinkArrowSVG from '../../icons/link-arrow.svg';
// import LinkArrowGreySVG from "img/icons/link-arrow-grey.svg";
// import FlagSVG from "img/icons/flag.svg";
// import FlexibilitySVG from "img/icons/cog.svg";
// import MarketAccessSVG from "img/icons/padlock.svg";
// import TermsConditionsSvg from "img/icons/terms-conditions.svg";
// import AnalyseSVG from "img/icons/analyse-icon.svg";
// import BetSVG from "img/icons/bet-icon.svg";
// import WinSVG from "img/icons/win-icon.svg";
// import QuoteSVG from "img/icons/quote.svg";
// import EnvelopeSVG from "img/icons/envelope.svg";
// import FacebookSVG from "img/icons/facebook.svg";
// import LinkedinSVG from "img/icons/linkedin.svg";
// import GoogleSVG from "img/icons/google.svg";
// import StarterSvg from "img/icons/starter.svg";
// import IntermediateSvg from "img/icons/intermediate.svg";
// import AdvancedSvg from "img/icons/advanced.svg";
// import FacebookBlackSVG from "img/icons/facebook-black.svg";
// import LinkedinBlackSVG from "img/icons/linked-in-black.svg";
// import AppleBlackSVG from "img/icons/apple_logo_black.svg";
// import FacebookWhiteSVG from "img/icons/facebook-white.svg";
// import LinkedinWhiteSVG from "img/icons/linkedin-white.svg";
// import AppleLogoWhiteSVG from "img/icons/apple_logo_white.svg";
// import GoogleBlackSVG from "img/icons/google-black.svg";
// import BackArrowSVG from "img/icons/back-arrow.svg";
// import EditCircleSvg from "img/icons/edit-circle.svg";
// import EmailSVG from "img/icons/email.svg";
// import DocumentsSVG from "img/icons/documents-icon.svg";
// import SpeechBubbleSVG from "img/icons/speech-bubble-icon.svg";
// import FlagAUSVG from "img/icons/flag-au.svg";
// import FlagGBSVG from "img/icons/flag-gb.svg";
// import FlagBSSVG from "img/icons/flag-bs.svg";
// import FlagZASVG from "img/icons/flag-za.svg";
// import TwitterSVG from "img/icons/twitter.svg";
// import CircleArrowLeftSVG from "img/icons/circle-arrow-left.svg";
// import ArrowLeftSVG from "img/icons/arrow-left.svg";
// import PlusSVG from "img/icons/plus.svg";
// import CloseSvg from "img/icons/close.svg";
// import PhoneSvg from "img/icons/phone.svg";
// import ClockSvg from "img/icons/clock.svg";
// import LocationSvg from "img/icons/location.svg";
// import WorldPaySvg from "img/icons/worldpay.svg";
// import BankSvg from "img/icons/bank.svg";
// import NoireSvg from "img/icons/noire.svg";
// import SafechargeSvg from "img/icons/safecharge.svg";
// import CheckConfirmationSVG from "img/icons/check_confimation.svg";
// import TransferSvg from "img/icons/transfer.svg";
// import DepositSvg from "img/icons/deposit.svg";
// import WithdrawSvg from "img/icons/withdraw.svg";
// import TurnOffSvg from "img/icons/turn-off.svg";
// import ArrowDownSvg from "img/icons/arrow_down.svg";
// import MedHighRiskSvg from "img/icons/med-high_risk.svg";
// import LowMedRiskSvg from "img/icons/low-med_risk.svg";
// import MedHighRiskOrangeSvg from "img/icons/med-high_risk_selected.svg";
// import LowMedRiskOrangeSvg from "img/icons/low-med_risk_selected.svg";

const icons = {
  // Edit: EditSvg,
  // World: WorldSvg,
  // arrows: BetSVG,
  // bars: AnalyseSVG,
  "circle-arrow-right": RightArrowSVG,
  "circle-arrow-right-white": LinkArrowSVG,
  // "circle-arrow-grey": LinkArrowGreySVG,
  // circles: WinSVG,
  // flag: FlagSVG,
  // cog: FlexibilitySVG,
  // "lock-open": MarketAccessSVG,
  // "terms-conditions": TermsConditionsSvg,
  // lock: MarketAccessSVG,
  // quote: QuoteSVG,
  // envelope: EnvelopeSVG,
  // facebook: FacebookSVG,
  // linkedin: LinkedinSVG,
  // google: GoogleSVG,
  // "trader-starter": StarterSvg,
  // "trading-intermediate": IntermediateSvg,
  // "trading-expert": AdvancedSvg,
  // "facebook-black": FacebookBlackSVG,
  // "linkedin-black": LinkedinBlackSVG,
  // "apple-black": AppleBlackSVG,
  // "facebook-white": FacebookWhiteSVG,
  // "linkedin-white": LinkedinWhiteSVG,
  // apple_logo_white: AppleLogoWhiteSVG,
  // "google-black": GoogleBlackSVG,
  // "back-arrow": BackArrowSVG,
  // "edit-circle": EditCircleSvg,
  // email: EmailSVG,
  // documents: DocumentsSVG,
  // "speech-bubble": SpeechBubbleSVG,
  // "flag-au": FlagAUSVG,
  // "flag-gb": FlagGBSVG,
  // "flag-bs": FlagBSSVG,
  // "flag-za": FlagZASVG,
  // twitter: TwitterSVG,
  // "circle-arrow-left": CircleArrowLeftSVG,
  // "arrow-left": ArrowLeftSVG,
  // plus: PlusSVG,
  // close: CloseSvg,
  // telephone: PhoneSvg,
  // clock: ClockSvg,
  // marker: LocationSvg,
  // worldpay: WorldPaySvg,
  // bank: BankSvg,
  // noirepay: NoireSvg,
  // safecharge: SafechargeSvg,
  // "check-confimation": CheckConfirmationSVG,
  // transfer: TransferSvg,
  // deposit: DepositSvg,
  // withdraw: WithdrawSvg,
  // "turn-off": TurnOffSvg,
  // "arrow-down": ArrowDownSvg,
  // "med-high_risk_aus": MedHighRiskSvg,
  // "low-med_risk_uk": LowMedRiskSvg,
  // "med-high_risk_aus-or": MedHighRiskOrangeSvg,
  // "low-med_risk_uk-or": LowMedRiskOrangeSvg
};

const getExtraIconClasses = iconId => {
  switch (iconId) {
    case "circle-arrow-right":
      return " icon--circle-arrow";
    case "circle-arrow-right-white":
      return " icon--circle-arrow icon--circle-arrow-white";
    default:
      return "";
  }
};


const DynamicIcon = ({ icon, className, wrapWithSpan = true }) => {
  const Icon = icons[icon];
  const classNames = `${className || ""}${getExtraIconClasses(icon)}` || null;
  if (wrapWithSpan) {
    return Icon ? (
      <span className={classNames}>
        <Icon />
      </span>
    ) : null;
  }
  return Icon ? <Icon className={classNames} /> : null;
};

// DynamicIcon.propTypes = {
//   icon: PropTypes.string,
//   className: PropTypes.string,
//   wrapWithSpan: PropTypes.bool
// };

export default DynamicIcon;