interface WithWrapperProps {
  [key: string]: unknown;
}

export function New<T extends object>(WrappedComponent: React.ComponentType<T>) {
  const WithWrapper: React.FC<T & WithWrapperProps> = (props) => {
      return (
          <div className="wrap-item wrap-item-new">
              <span className="label">New!</span>
              <WrappedComponent {...(props as T)} />
          </div>
      );
  };
  return WithWrapper;
}