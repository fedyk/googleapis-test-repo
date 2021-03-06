
import { google } from "googleapis";

const calendar = google.calendar('v3');

async function main() {
  const auth = new google.auth.GoogleAuth({
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: [
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/calendar.events',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();

  google.options({ auth: authClient });

  // Do the magic
  const res = await calendar.events.insert({
    // Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
    calendarId: 'placeholder-value',
    // Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
    conferenceDataVersion: 'placeholder-value',
    // The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
    maxAttendees: 'placeholder-value',
    // Deprecated. Please use sendUpdates instead.
    //
    // Whether to send notifications about the creation of the new event. Note that some emails might still be sent even if you set the value to false. The default is false.
    sendNotifications: 'placeholder-value',
    // Whether to send notifications about the creation of the new event. Note that some emails might still be sent. The default is false.
    sendUpdates: 'placeholder-value',
    // Whether API client performing operation supports event attachments. Optional. The default is False.
    supportsAttachments: 'placeholder-value',

    // Request body metadata
    requestBody: {
      // request body parameters
      "anyoneCanAddSelf": false,
      "attachments": [],
      "attendees": [],
      "attendeesOmitted": false,
      "colorId": "my_colorId",
      "conferenceData": {},
      "created": "my_created",
      "creator": {},
      "description": "my_description",
      "end": {},
      "endTimeUnspecified": false,
      "etag": "my_etag",
      "extendedProperties": {},
      "gadget": {},
      "guestsCanInviteOthers": false,
      "guestsCanModify": false,
      "guestsCanSeeOtherGuests": false,
      "hangoutLink": "my_hangoutLink",
      "htmlLink": "my_htmlLink",
      "iCalUID": "my_iCalUID",
      "id": "my_id",
      "kind": "my_kind",
      "location": "my_location",
      "locked": false,
      "organizer": {},
      "originalStartTime": {},
      "privateCopy": false,
      "recurrence": [],
      "recurringEventId": "my_recurringEventId",
      "reminders": {},
      "sequence": 0,
      "source": {},
      "start": {},
      "status": "my_status",
      "summary": "my_summary",
      "transparency": "my_transparency",
      "updated": "my_updated",
      "visibility": "my_visibility"
    },
  });
  console.log(res.data);
}
