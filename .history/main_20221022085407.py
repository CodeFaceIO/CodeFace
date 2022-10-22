class Developer (object) :
    def _init_(self, skills) :
        self.skills = skills
    def _add_(self, other):
        skills = self.skills + other.skills
        return Developer (skills)
        
        
    def _str_(self) :
        return "Skills"
        A = Developer('NodeJS')
        B = Developer ('Python')
        # print(A+B)
