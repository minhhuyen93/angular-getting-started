using System.Collections.Generic;

namespace Api.Common
{
    public interface IResponseData<TData>
    {
        void SetData(TData item);
        void AddError(string errorKey);
        void AddErrors(IList<string> errors);
    }
}
