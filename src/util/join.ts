//@TODO Entity key를 가지고 join시 타이핑 되도록
export function join(...relations: string[]) {
  return {
    relations: relations,
  };
}
