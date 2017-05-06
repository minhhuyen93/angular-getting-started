namespace Api.Common
{
    using System;
    using System.Collections.Generic;

    public class ValidationException:Exception
    {
        public ValidationException()
        {
            this.Errors = new List<string>();
        }
        public ValidationException(string messageKey) : this()
        {
            this.Errors.Add(messageKey);
        }

        public IList<string> Errors { get; set; }

        public void AddError(string messageKey)
        {
            this.Errors.Add(messageKey);
        }

        public void ThrowIfError()
        {
            if (this.Errors.Count <= 0) { return; }
            throw this;
        }
    }
}
