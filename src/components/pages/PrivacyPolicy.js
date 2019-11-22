import React from 'react'
import {PageHeader} from '../widgets'
import Container from "@material-ui/core/Container"
import {Row, Col} from 'react-bootstrap'
const PrivacyPolicy = (props) => {
    return (
        <>
        <PageHeader title="PRIVACY POLICY" />
        <div className="section-container p-t-20 bg-silver">
            <Container>
                <Row className="row-space-30">
                    <Col md={12}>
                        <h4 className="m-t-0">Privacy Policy of Bricksadvisors</h4>
                        <p className="m-b-10 f-s-13">
                        Bricksadvisors Pvt. Ltd. operates the Bricksadvisors website, which provides the SERVICE.
                        </p>
                        <p className="m-b-10 f-s-13">
                        This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the Bricksadvisors website.
                        </p>
                        <p className="m-b-10 f-s-13">
                        If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
                        </p>
                        <p className="m-b-30 f-s-13">
                        The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at bricksadvisors.com, unless otherwise defined in this Privacy Policy.
                        </p>
                        <h5 className="m-t-0">Information Collection and Use</h5>
                        <p className="m-b-30 f-s-13">
                        For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.
                        </p>
                        <h5 className="m-t-0">Log Data</h5>
                        <p className="m-b-30 f-s-13">
                        We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol (“IP”) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
                        </p>
                        <h5 className="m-t-0">Cookies</h5>
                        <p className="m-b-10 f-s-13">
                        Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive.</p>
                        <p className="m-b-20 f-s-13">
                        Our website uses these “cookies” to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.
                        </p>
                        <h5 className="m-t-0">Security</h5>
                        <p className="m-b-10 f-s-13">
                        We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default PrivacyPolicy;