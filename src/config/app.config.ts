interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Upworx',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage job applications',
    'Create and edit contracts',
    'Read job offers',
    'Edit personal user information',
  ],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage job offers', 'Manage job applications'],
  getQuoteUrl: 'https://app.roq.ai/proposal/f0c736c1-7436-4683-89aa-169850e5ea5a',
};
