import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';


export class OAuth2ClientCredentials implements ICredentialType {
	name = 'oAuth2ClientCredentials';
	displayName = 'OAuth2 Client Credentials';
	documentationUrl = 'httpRequest';
	properties = [
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'string' as NodePropertyTypes,
			default: '',
			required: true,
		},
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string' as NodePropertyTypes,
			default: '',
			required: true,
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string' as NodePropertyTypes,
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
		},
		{
			displayName: 'Audience',
			name: 'audience',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
	];
}
