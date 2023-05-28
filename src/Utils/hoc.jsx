export const hoc = (hook, Component) => {
  const Result = (props) => <Component {...hook(props)} {...props} />;

  Result.Original = Component;
  Result.hook = hook;

  return Result;
};
