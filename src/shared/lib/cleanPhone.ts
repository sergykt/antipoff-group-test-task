export const cleanPhone = (phone: string) => {
  return phone.replace(/[^\d+]/g, '');
};
