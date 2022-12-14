﻿namespace SehirRehberi.API.Dto
{
    public class PhotoForCreationDto
    {
        public string Url { get; set; }
        public IFormFile File { get; set; }
        public string Descrition { get; set; }
        public DateTime DateAdded { get; set; }
        public string PublicId { get; set; }

    }
}
