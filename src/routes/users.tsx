import { useAuth } from "@workos-inc/authkit-react";
import { UsersManagement, WorkOsWidgets } from "@workos-inc/widgets";

export function Users() {
  const { isLoading, getAccessToken } = useAuth();

  if (isLoading) {
    return null;
  }

  return (
    <WorkOsWidgets apiHostname={import.meta.env.VITE_WORKOS_API_HOSTNAME}>
      <UsersManagement authToken={getAccessToken} />
    </WorkOsWidgets>
  );
}
