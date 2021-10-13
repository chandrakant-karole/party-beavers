import React from "react";
import Header from "./Header";
import Footer from './Footer';
import '../assets/css/main.css';
import '../assets/js/main.js';
import Dummy from '../assets/images/dummy.png';
import { Container, Row, Col, Card, Form, Image, Ratio } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PartBeach from '../assets/images/party beach.jpg';
import DamHouse from '../assets/images/Omega Alpha Dam House.jpg';
import PartPool from '../assets/images/party pool.jpg';
import FratHouse from '../assets/images/The Frat House.jpg';
// import Discord from '../assets/images/discord logo.png';
// import Tiktok from '../assets/images/tiktok logo.png';
import Logo from '../assets/images/Logo (2).png';
import PartyVideo from '../assets/video/House Layer_2_2.mp4';
import Black from '../assets/images/Black.png';
import CaryingBuddy from '../assets/images/carying bud.png';
import Blue from '../assets/images/BeaverUAFro.png';
import Red from '../assets/images/Brent Ellerson.png';
import Green from '../assets/images/chugging beer green.png';
import White from '../assets/images/white.png';
import DamText from '../assets/images/DAMMM COLOURS.png';
import SiteLogo from '../assets/images/PARTY BEAVERS TITLE outline.png';
// import Mouse from '../assets/images/TileBeaver.png';
import Paw from '../assets/images/Beaver Paw ICON.png';
import Tiktok from '../assets/images/tiktok.png';
import Insta from '../assets/images/insta.png';
import Twitter from '../assets/images/twiter.png';
import MLogo from '../assets/images/m-logo.png';
import Discord from '../assets/images/discord.png';
import Ganja from '../assets/images/Ganja Master.png';
import Clever from '../assets/images/Cleave the Beave.png';
import Kegger from '../assets/images/Black Kegger.png';
import Gnar from '../assets/images/Gnar Gnar.png';
import Russian from '../assets/images/Rusland the Russian Beaver.png';
import Ice from '../assets/images/Ice Beaver.png';
import PMJ from '../assets/images/PMJCryptonized.png';
import Wooden from '../assets/images/CryptoBeavers_DAM EDIT.png'

function Home() {
    return (
        <>
            <Header />

            {/* ================ New Index Change Start================ */}
            <Container className="collage_bg" fluid>
                <Row className="justify-content-md-center">
                    <Col lg={8}>
                        <h2 className="video_tile">THE DOPEST PARTY IN THE NFT METAVERSE IS ABOUT TO BEGIN...</h2>
                        <div>
                            <Ratio aspectRatio="16x9">
                                <video src={PartyVideo} autoPlay loop></video>
                            </Ratio>
                        </div>
                    </Col>
                    {/* <Col lg={6}><h2 className="home_headtxt">Metaverse's craziest NFT Party is about to start</h2></Col>
                    <Col lg={8}><Image src={PartBeach} fluid /></Col>
                    <Col lg={5} className="mid_collage"><Image className="dam_house_img" src={DamHouse} fluid /></Col>
                    <Col lg={3}><Image className="party_pool_img" src={PartPool} fluid /></Col>
                    <Col lg={8}><Image src={FratHouse} fluid /></Col> */}
                </Row>
            </Container>

            <Container className="mid_title_section" fluid>
                <Row className="justify-content-md-center">
                    <Col lg={8}>
                        <h2 className="mid_title_txt">Are you ready to <span className="mid_char">$@!%</span>ing<br /> party in the metaverse? </h2>
                        <p className="mid_para_txt">10,000 Party Beavers Generatively Designed NFTs<br />Totally ready to party!</p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="justify-content-md-center">
                    <Col lg={4}>
                        <Image className="" src={Black} fluid />
                    </Col>
                    <Col lg={4}>
                        <Image className="" src={CaryingBuddy} fluid />
                    </Col>
                    <Col lg={4}>
                        <Image className="" src={Blue} fluid />
                    </Col>
                    <Col lg={4}>
                        <Image className="" src={Red} fluid />
                    </Col>
                    <Col lg={4}>
                        <Image className="" src={Green} fluid />
                    </Col>
                    <Col lg={4}>
                        <Image className="" src={White} fluid />
                    </Col>
                </Row>
            </Container>

            <Container className="mintedCount_section" fluid>
                <Row className="justify-content-md-center">
                    <Col lg={8}>
                        <h2 className="mintedCount_title">0 out of 10,111<br />Party Beavers Minted</h2>
                    </Col>
                </Row>
            </Container>

            {/* ================ New Index Change Start================ */}

            {/* <Container>
                <Row>
                    <Col>
                        <div className="home_titlediv">
                            <h2>Metaverse's craziest exclusive Frat House:<br />
                                The Mega Alpha Dam Beaver Party</h2>
                            <div className="home_tilesocial">
                                <div className="homefacebook_div">
                                    <a href="javascript:;">
                                        <FontAwesomeIcon className="homesocial_icon" icon={faFacebookF} />
                                    </a>
                                </div>
                                <div className="hometwitter_div">
                                    <a href="javascript:;">
                                        <FontAwesomeIcon className="homesocial_icon" icon={faTwitter} />
                                    </a>
                                </div>
                                <div className="homeinstagram_div">
                                    <a href="javascript:;">
                                        <FontAwesomeIcon className="homesocial_icon" icon={faInstagram} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container> */}
            {/* <Container>
                <Row className="homecard_div">
                    <Card className="home_card first" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Dummy} alt="characters-gif" />
                        <Card.Title className="homecard_txt">GIF of characters
                            rapidly changing</Card.Title>
                        <div className="homecard_btm">
                            <p>10,000 Party Beavers
                                Generatively Designed NFTs
                                Totally ready to party!</p>
                        </div>
                    </Card>
                    <Card className="home_card second" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Dummy} alt="frat-house" />
                        <Card.Title className="homecard_txt">Image
                            of the front of the
                            frat house.</Card.Title>
                        <div className="homecard_btm">
                            <p>Party Beaver NFT ownership grants you membership to the
                                MEGA ALPHA DAM Frat House
                                Are you ready to @#$%ing party in the metaverse?</p>
                        </div>
                    </Card>
                    <Card className="home_card third" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Dummy} alt="beavers" />
                        <Card.Title className="homecard_txt">
                            <ul>
                                <li>Slide show of:</li>
                                <li>-beavers</li>
                                <li>- fishing</li>
                                <li>- DJing</li>
                                <li>- Funneling beers</li>
                                <li>- smashing a bong</li>
                            </ul>
                        </Card.Title>
                        <div className="homecard_btm">
                            <ul>
                                <li>Your NFT traits will impact:</li>
                                <li>- What you can do</li>
                                <li>- Your luck at games</li>
                                <li>- Strength in combat</li>
                                <li>- Your skill in sports</li>
                                <li>- Ability to funnel beers</li>
                                <li>- Ability to smash bongs</li>
                            </ul>
                        </div>
                    </Card>
                </Row>
            </Container> */}
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="homebtn_div first">
                            <a className="btnOne" href="javascript:;">Connect Wallet</a>
                        </div>
                    </Col>
                    <Col lg={4} className="mouse_div">
                        <Image src={Paw} fluid className="mouse_img"/>
                    </Col>
                    <Col lg={4}>
                        <div className="homebtn_div second">
                            <a className="btnTwo" href="javascript:;">Mint a Party beaver</a>
                        </div>
                    </Col>

                </Row>
            </Container>

            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <p className="homerangetxt_div">Select how hard you want to bash:</p>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <Form.Range />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={12} sm={12}>
                        <div className="homecountd_txt">
                            <h3>17.11.2021 8 PM EST - Minting Gateway will open</h3>
                        </div>
                    </Col>
                    <Col lg={12} sm={12}>
                        <div class="container">
                            <div id="countdown">
                                <ul>
                                    <li><span id="days"></span>days</li>
                                    <li><span id="hours"></span>Hours</li>
                                    <li><span id="minutes"></span>Minutes</li>
                                    <li><span id="seconds"></span>Seconds</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="homecountd_para">
                            <span className="mid_sec_social_div">
                                <ul>
                                <li><a href="javascript:;"><Image className="tiktok_img" src={Tiktok} /></a></li>
                                        <li><a href="javascript:;"><Image className="discord_img" src={Insta} /></a></li>
                                        <li><a href="javascript:;"><Image className="discord_img" src={Twitter} /></a></li>
                                        <li><a href="javascript:;"><Image className="discord_img" src={MLogo} /></a></li>
                                        <li><a href="javascript:;"><Image className="discord_img" src={Discord} /></a></li>
                                    {/* <li><a className="twitter_icon_top" href="javascript:;"><FontAwesomeIcon className="homesocial_icon" icon={faTwitter} /></a></li> */}
                                    {/* <li><a className="instagram_icon_top" href="javascript:;"><FontAwesomeIcon className="homesocial_icon" icon={faInstagram} /></a></li> */}
                                </ul>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="wood_box">
                            <h2 className="sub_title_top">30 Day, 100 Party Beaver Give-Away<br /> across 4 platforms</h2>
                            <h2 className="sub_title">Follow and set alarms for Party<br /> Beaver Updates and chances to win!</h2>

                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className="dam_team_container" fluid>
                <Row className="dam_team_row my-4">
                    <h2 className="dam_team_head">The Whole <Image className="dam_txt" src={DamText} fluid /> Team</h2>
                    <Col lg={4}>
                        <div className="team_box_div">
                            <div className="box_div_img"><Image className="dam_team_img" src={Ganja} fluid /></div>
                            <div className="box_div_content">
                                <h4><span className="team_bx_head">Creator</span><br/> <span className="team_bx_tile">- Dick Dam Stix</span></h4>
                                <p>Party Beaver artist, video editor and project lead.  Dick Dam Stix's mind will give birth to the most chaotic mish mash of NFT action the metaverse has ever seen.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="team_box_div">
                            <div className="box_div_img"><Image className="dam_team_img" src={Clever} fluid /></div>
                            <div className="box_div_content">
                                <h4><span className="team_bx_head">Artist</span><br /> <span className="team_bx_tile">- Cleave the Beave</span></h4>
                                <p>20+ year experienced illustrator, Cleve the BEave is a trend setting Canadian artist from Toronto and co creator of Party Beavers.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="dam_team_row my-4">
                    <Col lg={4}>
                        <div className="team_box_div">
                            <div className="box_div_img"><Image className="dam_team_img" src={Kegger} fluid /></div>
                            <div className="box_div_content">
                                <h4><span className="team_bx_head">Programmer</span><br /><span className="team_bx_tile"> - Ajay</span></h4>
                                <p>CEO of InfoGrains.com, Ajay commands an army of blockchain programmers with over a century of combined experience.  A tight NFT minting experience is a guarantee.  </p>
                            </div>
                        </div>
                        <div className="team_box_div my-4">
                            <div className="box_div_img"><Image className="dam_team_img" src={Russian} fluid /></div>
                            <div className="box_div_content">
                                <h4><span className="team_bx_head">Animation</span><br /> <span className="team_bx_tile">- Ruslan the Russian Beaver</span></h4>
                                <p>NFT and crypto junkie, Ruslan the Russian Beaver is the talent behind bringing Party Beavers to life in preparation for NFT in-game animation, and game play.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="team_box_div">
                            <div className="box_div_img"><Image className="dam_team_img" src={Gnar} fluid /></div>
                            <div className="box_div_content">
                                <h4><span className="team_bx_head">Animation</span><br /> <span className="team_bx_tile">- Ruslan the Russian Beaver</span></h4>
                                <p>NFT and crypto junkie, Ruslan the Russian Beaver is the talent behind bringing Party Beavers to life in preparation for NFT in-game animation, and game play.</p>
                            </div>
                        </div>
                        <div className="team_multi_box">
                            <div className="box1">
                                <Image className="box_img" src={Ice} fluid />
                                <p>Ice Beaver German Twitter</p>
                            </div>
                            <div className="box2">
                                <Image className="box_img" src={PMJ} fluid />
                                <p>PMJCryptonized Japanese Twitter</p>
                            </div>
                            {/* <div className="box3">
                                <Image className="box_img" src={Logo} fluid />
                                <p>CryptoShmypto Twitter</p>
                            </div> */}
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="wooden_imgDiv" lg={6}>
                        <Image className="wooden_img" src={Wooden} fluid/>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="justify-content-md-center">
                    <Col lg={10}>
                        <h2 className="about_headTile">MINT YOUR OWN BEAVER FOR VIP PERKS in<br /> Metaverse's Massively Multiplayer NFT Party Zone.</h2>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={7}><h2 className="about_title">Follow & Learn More About the Party Beavers</h2>
                        <span className="about_social_div">
                        <ul>
                                <li><a href="javascript:;"><Image className="tiktok_img" src={Tiktok} /></a></li>
                                        <li><a href="javascript:;"><Image className="discord_img" src={Insta} /></a></li>
                                        <li><a href="javascript:;"><Image className="discord_img" src={Twitter} /></a></li>
                                        <li><a href="javascript:;"><Image className="discord_img" src={MLogo} /></a></li>
                                        <li><a href="javascript:;"><Image className="discord_img" src={Discord} /></a></li>
                                    {/* <li><a className="twitter_icon_top" href="javascript:;"><FontAwesomeIcon className="homesocial_icon" icon={faTwitter} /></a></li> */}
                                    {/* <li><a className="instagram_icon_top" href="javascript:;"><FontAwesomeIcon className="homesocial_icon" icon={faInstagram} /></a></li> */}
                                </ul>
                        </span>
                    </Col>
                </Row>
            </Container>

            <Container className="phase_container" fluid>
                <Row className="justify-content-md-center">
                    <Col lg={8}>
                        <h2 className="roadMap_head">The Omega Alpha Dam Party Beaver's Mission</h2>
                        <h2 className="roadMap_subHead">Completion of 30-Day Campaign.​</h2>
                        <h3 className="phase_txt">Phase 1:</h3>
                        <p className="phase_para">Present Data to the SM Party Beaver Community developed on the level of engagement for each social media platform.​</p>
                        <p className="phase_para">An overall score will be awarded to each platform and a proportionate number of Party Beaver NFTs will be allotted to give away for engagement in each platform.</p>
                        <p className="phase_para">Party Beavers SM followers, who correctly followed the instructions for each campaign, will be randomly chosen as winners of Party Beaver NFTS.</p>

                        <h3 className="phase_txt">Phase 2:</h3>
                        <p className="phase_para">Dick Dam Stix will issue the minting of the first ever 100 Party Beavers.  These will be the 100 Party Beavers issued out to our Social Media Campaign Winners.</p>


                        <h3 className="roadMap_subHead">100% Party Beavers Minted:</h3>
                        <h3 className="phase_txt">Phase 1:</h3>
                        <p className="phase_para">NFT Animator Gateway</p>
                        <p className="phase_para">The true vision of the Omega Alpha Dam Beaver Party - is to have 100's of thousands of NFT characters of all kinds, fully animated to enjoy the Party Beaver experience: Metaverse's Craziest Party Space.  True to the purpose of this project, we will prioritize the pipeline for animating user's NFT characters to bring the NFTverse to the Beaver Party in a cost effective manner.</p>
                        <p className="phase_para">"Tickets" sold to the Beaver Party will add to the developers pool of funds to develop...</p>

                        <h3 className="phase_txt">Phase 2:</h3>
                        <p className="phase_para">Open all (3) primary party spaces</p>


                    </Col>
                </Row>
                <Row className="justify-content-md-center collageImg_bg">
                    <Col lg={5}>
                        <Image className="collageImg_gapping" src={PartBeach} fluid />
                        <Image className="collageImg_gapping" src={FratHouse} fluid />
                    </Col>
                    <Col lg={3}>
                        <Image className="phase_pool_img collageImg_gapping" src={PartPool} fluid />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={8}>
                        <h3 className="phase_txt">Phase 2 functionality goals:</h3>
                        <ul className="phase_para">
                            {/* <li>Access the crypto ATM to claim airdropped LOGS​, and begin yield farming and staking</li>
                            <li>Use PC game controller to move your NFT character</li>
                            <li>Get into brawls</li>
                            <li>Square off in the ring in Beaver to Beaver combat</li>
                            <li>Wager LOGS on Scraps</li>
                            <li>Swill, chug, bong, smoke and beer bong</li>
                            <li>Buy and sell narcotics</li>
                            <li>Voice chat with character voice code enabled</li>
                            <li>Open dance studio and shops for Party Beaver Developers</li>
                            <li>Mint a Girlfriend</li>
                            <li>Mint VIP rooms</li>
                            <li>Start of the Omega Alpha Dam Leader Board</li>
                            <li>Allow users to DJ and change video in areas</li>
                            <li>Open the dance floor</li> */}
                            <li>To be revealed during 30-day SM campaign</li>
                        </ul>

                        <h3 className="phase_txt">Phase 3:</h3>
                        <ul className="phase_para phase3">
                            <li>To be revealed during 30-day SM campaign</li>
                            {/* <li>Surf a giant wave</li>
                            <li>Skate the giant half pipe</li>
                            <li>Play dice, blackjack, or roulette</li>
                            <li>Play water polo and baseball</li>
                            <li>Play beach volleyball</li>
                            <li>Open the strip club</li>
                            <li>Open the drinking games area (pool, darts, beer pong)</li>
                            <li>Host a first ever live DJ to spin at a metaverse event for the grand opening event (2023)</li> */}
                        </ul>


                        <h3 className="phase_txt">Phase 4:</h3>
                        <ul className="phase_para phase4">
                            <li>To be revealed during 30-day SM campaign</li>
                            {/* <li>Enable narcotics effects, including designer experiences for Ayahuasca developers and users</li>
                            <li>Enable Girlfriends and x-rated game features</li>
                            <li>Open the VIP elevator to VIP rooms</li>
                            <li>Open the Dam Beaver Ski Resort</li>
                            <li>Open the Cruise Ship Combat Area (armed NFT conflict)</li>
                            <li>Open the Beach Front Combat area (armed NFT conflict)</li>
                            <li>Open the Poker tables</li> */}
                        </ul>

                        <h3 className="phase_txt">Phase 5:</h3>
                        <p className="phase_para phase5">Initiate a series of votes to determine future expansion projects for the Beaver Party Metaverse.  Party Beaver NFT owners will proportionately vote on the expansion of experience, functionality, territory and game play.​</p>

                        <p className="phase_paraBtm">* Why 10,111 Party Beavers?  It's a prime number.  100 are for promotional giveaways, and 11 are for team members.  The budget planning for the most epic party game in the metaverse requires the sales of 10,000 Party Beavers for this world to come alive!</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center btm_logo_cont">
                    <Col lg={2} className="btm_col">
                        <Image src={SiteLogo} fluid className="btm_logo"/>
                    </Col>
                </Row>
            </Container>

            {/* <Container>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div className="homerdmap_div">
                            <h3>Road Map:</h3>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
                        </div>
                    </Col>
                </Row>
            </Container> */}

            <Footer />
        </>
    )
};

export default Home;