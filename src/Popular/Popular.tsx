interface WithWrapperProps {
    [key: string]: unknown;
  }

export function Popular<T extends object>(WrappedComponent: React.ComponentType<T>) {
    const WithWrapper: React.FC<T & WithWrapperProps> = (props) => {
        return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            <WrappedComponent {...(props as T )} />
        </div>
        ) 
    }
        return WithWrapper;
};