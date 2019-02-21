import * as core from 'club-hub-core';
import { RichContent } from '../models/rich';
import { ConfirmationInfo } from '../models/confirmation';
import { ClubInfo } from '../models/club';
export declare const BuildGenericContent: (content: string, club: core.Club.Model) => RichContent;
export declare const BuildEventContent: (event: core.Event.Model, club: core.Club.Model) => RichContent;
export declare const BuildPostContent: (post: core.Post.Model, club: core.Club.Model) => RichContent;
export declare const BuildConfirmationContent: (event: core.Event.Model, club: core.Club.Model) => ConfirmationInfo;
export declare const BuildClubInfo: (club: core.Club.Model) => ClubInfo;
