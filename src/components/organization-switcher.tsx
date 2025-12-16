import { useAuth } from "@workos-inc/authkit-react";
import {
  OrganizationSwitcher as WorkOSOrganizationSwitcher,
  WorkOsWidgets,
} from "@workos-inc/widgets";

export function OrganizationSwitcher() {
  const { isLoading, getAccessToken, switchToOrganization } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <WorkOsWidgets apiHostname={import.meta.env.VITE_WORKOS_API_HOSTNAME}>
      <WorkOSOrganizationSwitcher
        authToken={getAccessToken}
        switchToOrganization={switchToOrganization}
      />
    </WorkOsWidgets>
  );
}
