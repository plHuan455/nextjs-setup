interface EmptyLayoutProps {  
  children: React.ReactElement;
}

export const EmptyLayout: React.FC<EmptyLayoutProps> = ({children}) => {
  return children;
}