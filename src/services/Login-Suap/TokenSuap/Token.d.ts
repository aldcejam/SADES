export type TokenProps = {
    getValue: () => string | null | undefined;
    getExpirationTime: () => Date | null;
    getScope: () => string | null | undefined;
    IsSuapTokenExist: () => boolean;
    revoke: () => void;
  };
  