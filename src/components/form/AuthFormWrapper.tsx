import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/utils/cn';

interface AuthFormWrapperProps extends React.ComponentProps<'div'> {
  title: string;
  description: string;
}

export default function AuthFormWrapper({ title, description, className, children, ...props }: AuthFormWrapperProps) {
  return (
    <Card className='max-w-[500px]' {...props}>
      <CardHeader className='text-center'>
        <CardTitle className='text-xl'>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className={cn(className)}>{children}</CardContent>
    </Card>
  );
}
