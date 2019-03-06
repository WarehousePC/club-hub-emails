"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const welcomeEmailTemplate = (member, club, password) => {
    const message = `
		<p>Hi ${member.firstName} and welcome to Drivers Club!

		<p>Your new Drivers Club account has been created. This gives you access to the Drivers Club web and mobile apps!</p>

		<p>Please follow the url: ${club.domain} to login. Your username is: ${member.email}, your temporary password is: ${password}.</p>
			
		<p>To change your password, please use the "Forgot Password" link on the login screen. An email will then be sent to you with instructions on resetting the password.</p>

		<p>Please send an email to info@drivers.club if you have any questions!</p>

		<p>Best,</p> 

		<p>The Drivers Club team.</p>
	`;
    return message;
};
exports.WelcomeEmailTemplate = welcomeEmailTemplate;
const membershipApplicationTemplate = (memberInfo) => {
    const message = `
		<p> Hi there!</p>

		<p>A prospective member has completed the new member request form. Details below:</p>

		<p style='font-weight:bold; display:inline;'>Member Info</p>
		<ul>
			<li>
				${bulletLine('Name:', memberInfo.name)}
			</li>
			<li>
				${bulletLine('Company', memberInfo.company)}
			</li>
			<li>
				${bulletLine('Address', memberInfo.address)}
			</li>
			<li>
				${bulletLine('Address', memberInfo.addressTwo)}
			</li>
			<li>
				${bulletLine('Address', `${memberInfo.city} ${memberInfo.state.label} ${memberInfo.zip}`)}
			</li>
			<li>
				${bulletLine('Email', memberInfo.email)}
			</li>
			<li>
				${bulletLine('Phone', memberInfo.phoneNumber)}
			</li>
			<li>
				${bulletLine('Social', memberInfo.socialMedia)}
			</li>
			<li>
				${bulletLine('Automotive Passion', memberInfo.automotivePassion)}
			</li>
			<li>
				${bulletLine('Referral', memberInfo.referral)}
			</li>
			<li>
				${bulletLine('Car Showcase', memberInfo.carShowcase)}
			</li>
			<li>
				${bulletLine('Plan', memberInfo.membershipPlan)}
			</li>
			<li>
				${bulletLine('Membership Type', `${memberInfo.membershipType.label}`)}
			</li>
		</ul>

		<p>Thanks,</p>

		<p>Your friends at Drivers Club</p>
	`;
    return message;
};
exports.MembershipApplicationTemplate = membershipApplicationTemplate;
const membershipInquiryTemplate = (memberInfo) => {
    const message = `
		<p> Hi there!</p>

		<p>A prospective member has completed the membership inquiry form. Details below:</p>

		<p style='font-weight:bold; display:inline;'>Member Info</p>
		<ul>
			<li>
				${bulletLine('Name:', `${memberInfo.firstName} ${memberInfo.lastName}`)}
			</li>
			<li>
				${bulletLine('Email', memberInfo.email)}
			</li>
			<li>
				${bulletLine('Desired Membership', memberInfo.membership.label)}
			</li>
		</ul>

		<p>Thanks,</p>

		<p>Your friends at Drivers Club</p>
	`;
    return message;
};
exports.MembershipInquiryTemplate = membershipInquiryTemplate;
const membershipInquiryResponseTemplate = (memberFormInfo, url) => {
    const message = `
		<p>Dear ${memberFormInfo.firstName},</p>

		<p>Thank you for contacting Drivers Club regarding ${memberFormInfo.membership.label} membership!</p>

		<p>We would like to learn more about your automotive passions.</p>

		<p>Please click <a href="https://app.drivers.club/forms/application">this link</a> to begin the formal application process.</p>

		<p>Sincerely,</p>

		<p>Amanda Friedman</p>
		<p>General Manager</p>
	`;
    return message;
};
exports.MembershipInquiryResponseTemplate = membershipInquiryResponseTemplate;
const rsvpTemplate = (member, event) => {
    const fullName = `${member.firstName} ${member.lastName}`;
    const message = `
		<p> Hi there!</p>

		<p>A Drivers Club member has RSVP'd to an event. Details below:</p>

		<p style='font-weight:bold; display:inline;'>Member Info</p>
		<ul>
			<li>
				${bulletLine('Name:', fullName)}
			</li>
			<li>
				${bulletLine('Email:', member.email)}
			</li>
			<li>
				${bulletLine('Phone:', member.phone)}
			</li>
		</ul>

		<p style='font-weight:bold; display:inline;'>Event Info</p>
		<ul>
			<li>
				${bulletLine('Event:', event.name)}
			</li>
			<li>
				${bulletLine('ID', event._id.toString())}
			</li>
		</ul>
			
		<p>Thanks,</p>

		<p>Your friends at Drivers Club</p>
	`;
    return message;
};
exports.RsvpTemplate = rsvpTemplate;
const unRsvpTemplate = (member, event) => {
    const fullName = `${member.firstName} ${member.lastName}`;
    const eventPrice = (event.price) ? event.price.toString() : 'Free';
    const message = `
		<p> Hi there!</p>

		<p>A Drivers Club member has cancelled their RSVP to an event. Details below:</p>

		<p style='font-weight:bold; display:inline;'>Member Info</p>
		<ul>
			<li>
				${bulletLine('Name:', fullName)}
			</li>
			<li>
				${bulletLine('Email:', member.email)}
			</li>
			<li>
				${bulletLine('Phone:', member.phone)}
			</li>
		</ul>

		<p style='font-weight:bold; display:inline;'>Event Info</p>
		<ul>
			<li>
				${bulletLine('Event:', event.name)}
			</li>
			<li>
				${bulletLine('Price', eventPrice)}
			</li>
			<li>
				${bulletLine('ID', event._id.toString())}
			</li>
		</ul>
			
		<p>Thanks,</p>

		<p>Your friends at Drivers Club</p>
	`;
    return message;
};
exports.UnRsvpTemplate = unRsvpTemplate;
const publicRsvpTemplate = (event, memberInfo) => {
    const plusOneText = memberInfo.plusOne ? 'Yes' : 'No';
    const eventPrice = (event.price) ? event.price.toString() : 'Free';
    const message = `
		<p> Hi there!</p>

		<p>A public person has RSVP'd to an event. Details below:</p>

		<p style='font-weight:bold; display:inline;'>Member Info</p>
		<ul>
			<li>
				${bulletLine('Name:', memberInfo.name)}
			</li>
			<li>
				${bulletLine('Email:', memberInfo.email)}
			</li>
			<li>
				${bulletLine('Plus One:', plusOneText)}
			</li>
		</ul>

		<p style='font-weight:bold; display:inline;'>Event Info</p>
		<ul>
			<li>
				${bulletLine('Event:', event.name)}
			</li>
			<li>
				${bulletLine('Price', eventPrice)}
			</li>
			<li>
				${linkLine('Event', event.shortLink)}
			</li>
		</ul>
			
		<p>Thanks,</p>

		<p>Your friends at Drivers Club</p>
	`;
    return message;
};
exports.PublicRsvpTemplate = publicRsvpTemplate;
const serviceRequestTemplate = (member, provider, event, reservation) => {
    const fullName = `${member.firstName} ${member.lastName}`;
    const reservationMeta = reservation.meta;
    const vehicle = member.meta.car.vehicles.find((vehicle) => vehicle._id.toString() === reservationMeta.vehicleID.toString());
    const dateOpts = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const date = event.start.toLocaleDateString('en-US', dateOpts);
    const message = `
		<p> Hi there!</p>

		<p>A Drivers Club member has submitted a new service request. Details below:</p>

		<p style='font-weight:bold; display:inline;'>Provider Info</p>
		<ul>
			<li>
				${bulletLine('Name:', provider.name)}
			</li>
			<li>
				${bulletLine('Email', provider.location.email)}
			</li>
			<li>
				${bulletLine('Phone', provider.location.phone)}
			</li>
		</ul>

		<p style='font-weight:bold; display:inline;'>Member Info</p>
		<ul>
			<li>
				${bulletLine('Name:', fullName)}
			</li>
			<li>
				${bulletLine('Email', member.email)}
			</li>
			<li>
				${bulletLine('Phone', member.phone)}
			</li>
		</ul>

		<p style='font-weight:bold; display:inline;'>Service Info</p>
		<ul>
			<li>
				${bulletLine('Vehicle:', vehicle.model)}
			</li>
			<li>
				${bulletLine('Date', date.toString())}
			</li>
			<li>
				${bulletLine('Notes', reservation.meta.notes)}
			</li>
		</ul>
			
		<p>Thanks,</p>

		<p>Your friends at Drivers Club</p>
	`;
    return message;
};
exports.ServiceRequestTemplate = serviceRequestTemplate;
const newProviderTemplate = (providerInfo) => {
    const message = `
		<p> Hi there!</p>

		<p>A member has submitted a request to add a new Drivers Club provider. Details below:</p>

		<p style='font-weight:bold; display:inline;'>Provider Info</p>
		<ul>
			<li>
				${bulletLine('Name:', providerInfo.name)}
			</li>
			<li>
				${bulletLine('Contact', providerInfo.contactName)}
			</li>
			<li>
				${bulletLine('Email', providerInfo.email)}
			</li>
			<li>
				${bulletLine('Phone', providerInfo.phone)}
			</li>
			<li>
				${bulletLine('Street', providerInfo.address1)}
			</li>
			<li>
				${bulletLine('City', providerInfo.city)}
			</li>
			<li>
				${bulletLine('State', providerInfo.state.label)}
			</li>
			<li>
				${bulletLine('Zip', providerInfo.zip)}
			</li>
		</ul>

		<p>Thanks,</p>

		<p>Your friends at Drivers Club</p>
	`;
    return message;
};
exports.NewProviderTemplate = newProviderTemplate;
const bulletLine = (boldText, text) => {
    return `<p style='font-weight:bold; display:inline;'>${boldText}</p> <p style='display:inline;'>${text}</p>`;
};
const linkLine = (boldText, shortLink) => {
    return `<p style='font-weight:bold; display:inline;'>${boldText}</p> <a href="app.drivers.club/events/${shortLink}" style='display:inline;'>Event Link</a>`;
};
const regularText = (text) => {
    return `<p>${text}</p>`;
};
