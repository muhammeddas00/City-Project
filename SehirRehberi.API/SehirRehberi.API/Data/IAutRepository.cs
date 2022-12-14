using SehirRehberi.API.Models;

namespace SehirRehberi.API.Data
{
    public interface IAutRepository
    {
        Task<User>Register(User user,string password);
        Task<User> Login(string userName,string password);
        Task<bool> UserExits(string userName);
    }
}
